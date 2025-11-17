<script lang="ts">
    import { SvelteSet } from "svelte/reactivity";
    import type { enemyPatterns, enemy } from "./additionalInfo";
    import { AllPerks, sortPerkList, type Perk } from "./perks";
    import PerksComponent from "./perksComponent.svelte";
    import { getRandomNum, getRandomStr } from "$lib/simpleMath";

    interface Props {
        enemyP: enemyPatterns;
        tier: number;
        enemyType: string;
    }

    let { enemyP, tier, enemyType }: Props = $props();

    const perksTypes: Array<string> = ["All", "Normal", "Soft"];
    let localEnemy: enemy = $state({
        Dificulty: 0,
        MajorThreshold: 0,
        SevereThreshold: 0,
        HP: 0,
        Stress: 0,
        ATK: 0,
        DamageAverage: "",
        DicePools: "",
    });
    let enemyName: string = $state(enemyType + "?");
    let localAllPerks: Array<Perk> = $state([]);
    let selectedPerks: Array<Perk> = $state(sortPerkList(enemyP.Perks));
    let chosenAllPerkType: string = $state("All");
    let chosenSelectedPerkType: string = $state("All");

    randomizeEnemy();
    updatePerks();

    function callbackUpdateList(perkName: string) {
        let found = -1;
        selectedPerks.forEach((val, idx) => {
            if (val?.Name === perkName) {
                found = idx;
            }
        });
        if (found !== -1) {
            localAllPerks.push(selectedPerks.at(found)!);
            delete selectedPerks[found];
        } else {
            localAllPerks.forEach((val, idx) => {
                if (val?.Name === perkName) {
                    found = idx;
                }
            });
            selectedPerks.push(localAllPerks.at(found)!);
            delete localAllPerks[found];
        }
        localAllPerks = sortPerkList(localAllPerks);
        selectedPerks = sortPerkList(selectedPerks);
    }

    function updatePerks() {
        localAllPerks = [];
        let names: Set<string> = new SvelteSet<string>();
        selectedPerks = sortPerkList(enemyP.Perks);
        selectedPerks.forEach((val) => {
            names.add(val!.Name);
        });
        AllPerks.forEach((val) => {
            if (!names.has(val.Name)) {
                localAllPerks.push(val);
            }
        });
        localAllPerks = sortPerkList(localAllPerks);
    }

    function randomizeEnemy() {
        localEnemy.Dificulty = getRandomNum(enemyP.Dificulty);
        localEnemy.MajorThreshold = getRandomNum(enemyP.MajorThreshold);
        localEnemy.SevereThreshold = getRandomNum(enemyP.SevereThreshold);
        localEnemy.HP = getRandomNum(enemyP.HP);
        localEnemy.Stress = getRandomNum(enemyP.Stress);
        localEnemy.ATK = getRandomNum(enemyP.ATK);
        localEnemy.DicePools = getRandomStr(enemyP.DicePools);
        localEnemy = localEnemy;
    }
</script>

<div>
    <div class="flex gap-3 align-bottom">
        <label class="label mb-2">
            <span> Adversary Name </span>
            <input class="input" bind:value={enemyName} />
        </label>
        <button
            class="btn preset-filled-primary-500 max-h-9 mt-6"
            onclick={randomizeEnemy}
        >
            Randomize
        </button>
    </div>

    <div class="flex gap-2">
        <label class="label mb-2">
            <span>Difficulty</span>
            <select class="select pl-2" bind:value={localEnemy.Dificulty}>
                {#each enemyP.Dificulty as dif, idx (idx)}
                    <option value={dif}>{dif}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Major Threshold</span>
            <select class="select pl-2" bind:value={localEnemy.MajorThreshold}>
                {#each enemyP.MajorThreshold as major, idx (idx)}
                    <option value={major}>{major}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Severe Threshold</span>
            <select class="select pl-2" bind:value={localEnemy.SevereThreshold}>
                {#each enemyP.SevereThreshold as severe, idx (idx)}
                    <option value={severe}>{severe}</option>
                {/each}
            </select>
        </label>
    </div>
    <div class="flex gap-2">
        <label class="label mb-2">
            <span>HP</span>
            <select class="select pl-2" bind:value={localEnemy.HP}>
                {#each enemyP.HP as hp, idx (idx)}
                    <option value={hp}>{hp}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Stress</span>
            <select class="select pl-2" bind:value={localEnemy.Stress}>
                {#each enemyP.Stress as stress, idx (idx)}
                    <option value={stress}>{stress}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>ATK</span>
            <select class="select pl-2" bind:value={localEnemy.ATK}>
                {#each enemyP.ATK as atk, idx (idx)}
                    <option value={atk}>{atk}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Dice Pool</span>
            <select class="select pl-2" bind:value={localEnemy.DicePools}>
                {#each enemyP.DicePools as dp, idx (idx)}
                    <option value={dp}>{dp}</option>
                {/each}
            </select>
        </label>
    </div>
    <div class="grid grid-cols-2 gap-10">
        <div class="col-span-1 overflow-scroll max-h-[600px] pr-3">
            <h4 class="h4 text-center">{enemyName} Perks</h4>
            <div>
                <nav
                    class="btn-group preset-outlined-surface-200-800 flex-row p-2 flex justify-center"
                >
                    {#each perksTypes as perk (perk)}
                        <button
                            type="button"
                            class="btn-sm capitalize"
                            class:preset-filled={chosenSelectedPerkType == perk}
                            onclick={() => (chosenSelectedPerkType = perk)}
                        >
                            {perk}
                        </button>
                    {/each}
                </nav>
                {#each selectedPerks as p, idx (idx)}
                    {#if p && (p.MoveType === chosenSelectedPerkType || chosenSelectedPerkType === "All")}
                        <PerksComponent
                            perk={p}
                            adversaryName={enemyName}
                            adversaryTier={tier}
                            callback={callbackUpdateList}
                            isAdd={false}
                        />
                    {/if}
                {/each}
            </div>
        </div>
        <div class="col-span-1 overflow-scroll max-h-[600px] pr-3">
            <h4 class="h4 text-center">All Perks</h4>
            <div>
                <nav
                    class="btn-group preset-outlined-surface-200-800 flex-row p-2 flex justify-center"
                >
                    {#each perksTypes as perk (perk)}
                        <button
                            type="button"
                            class="btn-sm capitalize"
                            class:preset-filled={chosenAllPerkType == perk}
                            onclick={() => (chosenAllPerkType = perk)}
                        >
                            {perk}
                        </button>
                    {/each}
                </nav>
                {#each localAllPerks as p, idx (idx)}
                    {#if p && (p.MoveType === chosenAllPerkType || chosenAllPerkType === "All")}
                        <PerksComponent
                            perk={p}
                            adversaryName={enemyName}
                            adversaryTier={tier}
                            callback={callbackUpdateList}
                            isAdd={true}
                        />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>
