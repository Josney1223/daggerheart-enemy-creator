<script lang="ts">
    import { defaultEnemys } from "./additionalInfo";

    const adversarieTypes: Array<string> = [...defaultEnemys.keys()];
    const adversarieTiers: Array<number> = [1, 2, 3, 4];

    let choosenEnemyType: string = $state("");
    let choosenEnemyTier: number = $state(0);
</script>

<div class="flex justify-around mt-5 mb-5">
    <h4 class="h4">Choose an adversary type</h4>
</div>
<div class="grid grid-cols-5">
    <div class="col-span-2"></div>
    <div class="col-span-1">
        <select class="select" bind:value={choosenEnemyType}>
            {#each adversarieTypes as adv, idx (idx)}
                <option value={adv}>{adv}</option>
            {/each}
        </select>
        {#if choosenEnemyType}
            <select class="select" bind:value={choosenEnemyTier}>
                {#each adversarieTiers as adv, idx (idx)}
                    <option value={adv}>{adv}</option>
                {/each}
            </select>
        {/if}
        {#if choosenEnemyTier && choosenEnemyTier !== 0}
            <div>
                {defaultEnemys.get(choosenEnemyType)!.get(choosenEnemyTier)!
                    .Dificulty}
            </div>
        {/if}
    </div>
    <div class="col-span-2"></div>
</div>
