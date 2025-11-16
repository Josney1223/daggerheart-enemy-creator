<script lang="ts">
    import { defaultEnemys } from "./additionalInfo";
    import EnemyComponent from "./enemyComponent.svelte";

    const adversarieTypes: Array<string> = [...defaultEnemys.keys()];
    const adversarieTiers: Array<number> = [1, 2, 3, 4];

    let choosenEnemyType: string = $state("");
    let choosenEnemyTier: number = $state(0);
</script>

<div class="flex justify-around mt-5 mb-5 scheme-light">
    <h4 class="h4">Create an Adversary</h4>
</div>
<div class="grid grid-cols-3 mb-10 scheme-light">
    <div class="col-span-1"></div>
    <div class="col-span-1">
        <label class="label">
            <span>Type</span>
            <select class="select pl-2" bind:value={choosenEnemyType}>
                {#each adversarieTypes as adv, idx (idx)}
                    <option value={adv}>{adv}</option>
                {/each}
            </select>
        </label>
        {#if choosenEnemyType}
            <label class="label">
                <span>Tier</span>
                <select class="select pl-2" bind:value={choosenEnemyTier}>
                    {#each adversarieTiers as adv, idx (idx)}
                        <option value={adv}>{adv}</option>
                    {/each}
                </select>
            </label>
        {/if}
        {#if choosenEnemyType && choosenEnemyTier !== 0}
            <EnemyComponent
                enemyP={defaultEnemys
                    .get(choosenEnemyType)!
                    .get(choosenEnemyTier)!}
                tier={choosenEnemyTier}
            />
        {/if}
    </div>
    <div class="col-span-1">
        <div class="flex justify-around">
            {#if choosenEnemyType}
                <h5 class="h5">Help with the {choosenEnemyType}</h5>
            {/if}
        </div>
    </div>
</div>
