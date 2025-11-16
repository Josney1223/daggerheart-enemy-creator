<script lang="ts">
    import type { Perk } from "./perks";

    interface Props {
        perk: Perk;
        adversaryName?: string;
        adversaryTier?: number;
        callback: (perkName: string) => void;
        isAdd: boolean;
    }

    let { perk, adversaryName, adversaryTier, callback, isAdd }: Props =
        $props();
</script>

<div class="mb-2">
    <div class="flex justify-between border-b border-b-white">
        <h5 class="h5">{perk.Name}</h5>
        <p class="font-semibold text-[13px]">
            {perk.TriggerType} - {perk.MoveType}
        </p>
        {#if isAdd}
            <button
                class="btn btn-icon-sm preset-filled-success-500"
                onclick={() => {
                    callback(perk.Name);
                }}
            >
                +
            </button>
        {:else}
            <button
                class="btn btn-icon-sm preset-filled-error-500"
                onclick={() => {
                    callback(perk.Name);
                }}
            >
                -
            </button>
        {/if}
    </div>
    <div>
        {perk.Description.replaceAll(
            "<Adversary>",
            adversaryName ?? "???",
        ).replaceAll("<Tier>", String(adversaryTier ?? 0))}
    </div>
</div>
