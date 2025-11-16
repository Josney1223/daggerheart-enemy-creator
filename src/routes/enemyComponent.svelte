<script lang="ts">
    import { SvelteSet } from "svelte/reactivity";
    import type { enemyPatterns, enemy } from "./additionalInfo";
    import { AllPerks, type Perk } from "./perks";
    import PerksComponent from "./perksComponent.svelte";

    interface Props {
        enemyP: enemyPatterns;
        tier: number;
    }

    let { enemyP, tier }: Props = $props();

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
    let enemyName: string = $state("<Adversary>");
    let localPerks: Array<Perk> = $derived.by(() => {
        let allP: Array<Perk> = [];
        let names: Set<string> = new SvelteSet<string>();
        enemyP.Perks.forEach((val) => {
            names.add(val!.Name);
        });
        AllPerks.forEach((val) => {
            if (!names.has(val.Name)) {
                allP.push(val);
            }
        });
        return allP;
    });
    randomizeEnemy();

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

    function getRandomNum(items: Array<number>) {
        return items[Math.floor(Math.random() * items.length)];
    }
    function getRandomStr(items: Array<string>) {
        return items[Math.floor(Math.random() * items.length)];
    }
</script>

<div>
    <div>
        <label class="label mb-2">
            <span> Adversary Name </span>
            <input class="input" bind:value={enemyName} />
        </label>
        <button class="btn preset-filled-primary-500" onclick={randomizeEnemy}>
            Randomize
        </button>
    </div>

    <div class="flex gap-2">
        <label class="label mb-2">
            <span>Difficulty</span>
            <select class="select" bind:value={localEnemy.Dificulty}>
                {#each enemyP.Dificulty as dif, idx (idx)}
                    <option value={dif}>{dif}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Major Threshold</span>
            <select class="select" bind:value={localEnemy.MajorThreshold}>
                {#each enemyP.MajorThreshold as major, idx (idx)}
                    <option value={major}>{major}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Severe Threshold</span>
            <select class="select" bind:value={localEnemy.SevereThreshold}>
                {#each enemyP.SevereThreshold as severe, idx (idx)}
                    <option value={severe}>{severe}</option>
                {/each}
            </select>
        </label>
    </div>
    <div class="flex gap-2">
        <label class="label mb-2">
            <span>HP</span>
            <select class="select" bind:value={localEnemy.HP}>
                {#each enemyP.HP as hp, idx (idx)}
                    <option value={hp}>{hp}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Stress</span>
            <select class="select" bind:value={localEnemy.Stress}>
                {#each enemyP.Stress as stress, idx (idx)}
                    <option value={stress}>{stress}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>ATK</span>
            <select class="select" bind:value={localEnemy.ATK}>
                {#each enemyP.ATK as atk, idx (idx)}
                    <option value={atk}>{atk}</option>
                {/each}
            </select>
        </label>
        <label class="label mb-2">
            <span>Dice Pool</span>
            <select class="select" bind:value={localEnemy.DicePools}>
                {#each enemyP.DicePools as dp, idx (idx)}
                    <option value={dp}>{dp}</option>
                {/each}
            </select>
        </label>
    </div>
    <div class="grid grid-cols-2 gap-10">
        <div class="col-span-1">
            <h4 class="h4 text-center">Common Perks</h4>
            <div>
                {#each enemyP.Perks as p, idx (idx)}
                    {#if p}
                        <PerksComponent
                            perk={p}
                            adversaryName={enemyName}
                            adversaryTier={tier}
                        />
                    {/if}
                {/each}
            </div>
        </div>
        <div class="col-span-1">
            <h4 class="h4 text-center">All Perks</h4>
            <div>
                {#each localPerks as p, idx (idx)}
                    {#if p}
                        <PerksComponent
                            perk={p}
                            adversaryName={enemyName}
                            adversaryTier={tier}
                        />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>
