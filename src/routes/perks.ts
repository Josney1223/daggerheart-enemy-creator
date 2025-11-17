interface Perk {
    Name: string,
    TriggerType: string,
    Description: string,
    MoveType: string,
}

export function sortPerkList(perkList: Array<Perk>) {
    return perkList.sort((obj1, obj2) => {
        if (obj1!.Name > obj2!.Name) {
            return 1;
        }
        if (obj1!.Name < obj2!.Name) {
            return -1;
        }
        return 0;
    });
}

const AllPerks: Map<string, Perk> = new Map();

AllPerks.set("Momentum", {
    Name: "Momentum",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "When the <Adversary> makes a successful attack against a PC, you gain a Fear."
})

AllPerks.set("Ramp Up", {
    Name: "Ramp Up",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "You must spend a Fear to spotlight the <Adversary>. While spotlighted, they can make their standard attack against all targets within range."
})

AllPerks.set("Slow", {
    Name: "Slow",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When you spotlight the <Adversary> and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the <Adversary> and they have a token on their stat block, clear the token and they can act."
})

AllPerks.set("Terrifying", {
    Name: "Terrifying",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When the <Adversary> makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
})

AllPerks.set("Horde", {
    Name: "Horde",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When the <Adversary> have marked half or more of their HP, their standard attack deals half physical damage instead"
})

AllPerks.set("Relentless (X)", {
    Name: "Relentless (X)",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "The <Adversary> can be spotlighted up to X times per GM turn. Spend Fear as usual to spotlight them."
})

AllPerks.set("Activate Allies", {
    Name: "Activate Allies",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Spend X Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage"
})

AllPerks.set("Direct Damage", {
    Name: "Direct Damage",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "If the target or the adversary has a Condition damage dealt by the <Adversary> does direct damage."
})

AllPerks.set("Call Reinforcements", {
    Name: "Call Reinforcements",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Once per scene, mark a Stress to summon a <A different adversary>, which appears at Far/Very Far range."
})

AllPerks.set("Merciless", {
    Name: "Merciless",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When the <Adversary> is spotlighted, spotlight one additional ally without requiring a Fear to be spent to do so."
})

AllPerks.set("Tactician", {
    Name: "Tactician",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "When you spotlight the <Adversary>, mark a Stress to also spotlight two allies within Close range."
})

AllPerks.set("Minion (X)", {
    Name: "Minion (X)",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "The <Adversary> is defeated when they take any damage. For every X damage a PC deals to the <Adversary>, defeat an additional Minion within range the attack would succeed against."
})

AllPerks.set("Group Attack", {
    Name: "Group Attack",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Spend a Fear to choose a target and spotlight all <Adversary> within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal <standard damage> physical damage each. Combine this damage."
})

AllPerks.set("Opportunity Shot", {
    Name: "Opportunity Shot",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "When another adversary deals damage to a target within Far range of the <Adversary>, you can mark a Stress to add the <extra damage> to the damage roll."
})

AllPerks.set("Opportunist", {
    Name: "Opportunist",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When two or more adversaries are within Very Close range of a creature, all damage the <Adversary> deals to that creature is doubled."
})

AllPerks.set("Hit Multiple Targets", {
    Name: "Hit Multiple Targets",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "Spend a Fear to make an attack against # targets within Far range. Targets the <Adversary> succeeds against take <reduced damage>"
})

AllPerks.set("Ambush", {
    Name: "Ambush",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "While Hidden, make an attack against a target within <Range> range. On a success, deal <increased damage> physical damage."
})

AllPerks.set("Cloaked", {
    Name: "Cloaked",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Become Hidden until after the <Adversary>’s next attack. Attacks made while Hidden from this feature have advantage."
})

AllPerks.set("Countdown to (X)", {
    Name: "Countdown to (X)",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "Countdown (Loop 1d6). When the <countdown activation condition>, activate the countdown. When it triggers, the <Adversary> <does something powerful (make an attack, force a Reaction Roll>. All targets that <It succeeds against/fail> Have a negative outcome."
})

AllPerks.set("Too Many to Handle", {
    Name: "Too Many to Handle",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "When the <Adversary> is within Melee range of a creature and at least one other <Adversary> is within Close range, all attacks against that creature have advantage."
})

AllPerks.set("Pack Tactics", {
    Name: "Pack Tactics",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "If the <Adversary> makes a successful standard attack and another <Adversary> is within Melee range of the target, deal <extra damage> physical damageinstead of their standard damage and you gain a Fear"
})

AllPerks.set("AOE Condition", {
    Name: "AOE Condition",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Spend a Fear to make an attack against all targets within Very Close range. Targets the <Adversary> succeeds against become Restrained and Vulnerable <because of a thing that happened in the fiction>. A target can break free, ending both conditions, with a successful Trait Roll."
})

AllPerks.set("Flying", {
    Name: "Flying",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "While flying, the <Adversary> gains a +2 bonus to their Difficulty."
})

AllPerks.set("Roar", {
    Name: "Roar",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> roars in anger, preparing for its next strike. The next time the <Adversary> attacks, it gains an additional <Tier>d4 to its attack roll."
})

AllPerks.set("Rally", {
    Name: "Rally",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> rally together, gaining strength. They clear 1 HP or 1 Stress."
})

AllPerks.set("Encourage", {
    Name: "Encourage",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> encourages one of their allies, giving them advantage on their next attack roll."
})

AllPerks.set("Surround", {
    Name: "Surround",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> moves into a better position, surrounding the target."
})

AllPerks.set("Focus", {
    Name: "Focus",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> focuses for their next attack, adding +X to the damage of their next attack if it hits."
})

AllPerks.set("Retreat", {
    Name: "Retreat",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> retreats to a better position, disengaging from the PCs."
})

AllPerks.set("Cleanse", {
    Name: "Cleanse",
    TriggerType: "Action",
    MoveType: "Soft",
    Description: "The <Adversary> clears a condition on themselves or someone else."
})

AllPerks.set("Overwhelming Force", {
    Name: "Overwhelming Force",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "Targets who mark HP from the <Adversary>’s standard attack are knocked back to Very Close range"
})

AllPerks.set("Death Quake", {
    Name: "Death Quake",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "When the <Adversary> marks their last HP, the <insert fiction reason> ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take <Tier>d8+1 magic damage."
})

AllPerks.set("Rampage", {
    Name: "Rampage",
    TriggerType: "Reaction",
    MoveType: "Normal",
    Description: "When the <Adversary> marks 2 or more HP, they can rampage. Move the Ogre to a point within Close range and deal 2x<Tier>d6+3 direct physical damage to all targets in their path."
})

AllPerks.set("Ground Slam", {
    Name: "Ground Slam",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back this way must mark a Stress."
})

AllPerks.set("In Your Face", {
    Name: "In Your Face",
    TriggerType: "Passive",
    MoveType: "Normal",
    Description: "All targets within Melee range have disadvantage on attacks against targets other than the <Adversary>."
})

AllPerks.set("Adrenaline Burst", {
    Name: "Adrenaline Burst",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "Once per scene, spend a Fear to clear 2 HP and 2 Stress."
})

AllPerks.set("Regeneration", {
    Name: "Regeneration",
    TriggerType: "Action",
    MoveType: "Normal",
    Description: "If the <Adversary> has any marked HP, spend a Fear to clear a HP and <do something else>."
})

export { AllPerks, type Perk }
