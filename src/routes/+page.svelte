<script lang="ts">
    import { defaultEnemys } from "./additionalInfo";
    const adversarieTypes: Array<string> = [
        "Bruiser",
        "Horde",
        "Leader",
        "Minions",
        "Ranged",
        "Skulks",
        "Solo",
        "Standard",
        "Support",
    ];

    let choosenEnemyType: string = $state("");
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
            <div>{defaultEnemys.get(choosenEnemyType)!.get(1)!.Dificulty}</div>
        {/if}
    </div>
    <div class="col-span-2"></div>
</div>
