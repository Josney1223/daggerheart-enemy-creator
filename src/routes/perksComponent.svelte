<script lang="ts">
    import type { Perk } from "./perks";

    interface Props {
        perk: Perk;
        adversaryName?: string;
        adversaryTier?: number;
    }

    let { perk, adversaryName, adversaryTier }: Props = $props();
</script>

<div class="mb-2">
    <div class="flex justify-between border-b border-b-white">
        <h5 class="h5">{perk.Name}</h5>
        <p class="font-semibold text-[13px]">
            {perk.TriggerType} - {perk.MoveType}
        </p>
    </div>
    <div>
        {perk.Description.replaceAll(
            "<Adversary>",
            adversaryName ?? "???",
        ).replaceAll("<Tier>", String(adversaryTier ?? 0))}
    </div>
</div>
