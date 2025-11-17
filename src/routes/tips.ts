const adversaryTips: Map<string, Array<string>> = new Map()

adversaryTips.set("Bruiser", [
    "Attacks can hit Major usually and Severe when rolling well. They tend to use a d10-d12 damage die.",
    "Features include attacks that hit multiple enemies and move PCs around the battlefield.",
    "Common Features: Ramp Up, Momentum.",
    "Common Experiences: Crusher, Charger, Intimidation, Throw"
])

adversaryTips.set("Horde", [
    "Attacks can hit Major usually and Severe when rolling very well against a non-guardian until half HP."
])

adversaryTips.set("Leader", [
    "Attacks do slightly lower damage than a Bruiser and use a slightly lower damage die (d8-d10)",
    "Common Features: Momentum, Fear abilities that spotlight 1d4 allies at half damage"
])

export { adversaryTips }
