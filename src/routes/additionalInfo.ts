import { AllPerks, type Perk } from "./perks"

interface enemyPatterns {
    Dificulty: Array<number>,
    MajorThreshold: Array<number>,
    SevereThreshold: Array<number>,
    HP: Array<number>,
    Stress: Array<number>,
    ATK: Array<number>,
    DamageAverage: string,
    DicePools: Array<string>,
    Perks: Array<Perk>
}

interface enemy {
    Dificulty: number,
    MajorThreshold: number,
    SevereThreshold: number,
    HP: number,
    Stress: number,
    ATK: number,
    DamageAverage: string,
    DicePools: string
}

const defaultEnemys: Map<string, Map<number, enemyPatterns>> = new Map()

// "Leader",
// "Minions",
// "Ranged",
// "Skulks",
// "Solo",
// "Standard",
// "Support",

// Bruiser
const bruiser: Map<number, enemyPatterns> = new Map()
const bruiserPerks: Array<Perk> = [AllPerks.get("Momentum")!, AllPerks.get("Ramp Up")!, AllPerks.get("Slow")!, AllPerks.get("Terrifying")!, AllPerks.get("Roar")!]

bruiser.set(1, {
    Dificulty: [12, 13, 14],
    MajorThreshold: [7, 8, 9],
    SevereThreshold: [13, 14, 15],
    HP: [5, 6, 7],
    Stress: [3, 4],
    ATK: [0, 1, 2],
    DamageAverage: "8-11",
    DicePools: ["1d12+2", "1d10+4", "1d8+6"],
    Perks: bruiserPerks
})

bruiser.set(2, {
    Dificulty: [14, 15, 16],
    MajorThreshold: [12, 13, 14],
    SevereThreshold: [23, 24, 25, 26],
    HP: [5, 6, 7],
    Stress: [4, 5, 6],
    ATK: [2, 3, 4],
    DamageAverage: "12-16",
    DicePools: ["2d12+3", "2d10+4", "2d8+6"],
    Perks: bruiserPerks
})

bruiser.set(3, {
    Dificulty: [16, 17, 18],
    MajorThreshold: [19, 20, 21, 22],
    SevereThreshold: [35, 36, 37, 38, 39, 40],
    HP: [6, 7, 8],
    Stress: [4, 5, 6],
    ATK: [3, 4, 5],
    DamageAverage: "18-22",
    DicePools: ["3d12+1", "3d10+4", "3d8+8"],
    Perks: bruiserPerks
})

bruiser.set(4, {
    Dificulty: [18, 19, 20],
    MajorThreshold: [30, 31, 32, 33, 34, 35, 36, 37],
    SevereThreshold: [63, 64, 65, 66, 67, 68, 69, 70],
    HP: [7, 8, 9],
    Stress: [4, 5, 6],
    ATK: [5, 6, 7, 8],
    DamageAverage: "30-45",
    DicePools: ["4d12+15", "4d10+10", "4d8+12"],
    Perks: bruiserPerks
})

// Horde
const horde: Map<number, enemyPatterns> = new Map()
const hordePerks: Array<Perk> = [AllPerks.get("Horde")!, AllPerks.get("Rally")!]

horde.set(1, {
    Dificulty: [10, 11, 12],
    MajorThreshold: [5, 6, 7, 8, 9, 10],
    SevereThreshold: [8, 9, 10, 11, 12],
    HP: [4, 5, 6],
    Stress: [2, 3],
    ATK: [-2, -1, 0],
    DamageAverage: "5-8",
    DicePools: ["1d10+2", "1d8+3", "1d6+4"],
    Perks: hordePerks
})

horde.set(2, {
    Dificulty: [12, 13, 14],
    MajorThreshold: [10, 11, 12, 13, 14, 15],
    SevereThreshold: [16, 17, 18, 19, 20],
    HP: [5, 6],
    Stress: [2, 3],
    ATK: [-1, 0, 1],
    DamageAverage: "9-13",
    DicePools: ["2d10+2", "2d8+4", "2d6+6"],
    Perks: hordePerks
})

horde.set(3, {
    Dificulty: [14, 15, 16],
    MajorThreshold: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    SevereThreshold: [26, 27, 28, 29, 30, 31, 32],
    HP: [6, 7],
    Stress: [3, 4],
    ATK: [0, 1, 2],
    DamageAverage: "14-19",
    DicePools: ["3d10+4", "3d8+6", "3d6+8"],
    Perks: hordePerks
})

horde.set(4, {
    Dificulty: [16, 17, 18],
    MajorThreshold: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    SevereThreshold: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    HP: [7, 8],
    Stress: [4, 5],
    ATK: [1, 2, 3],
    DamageAverage: "20-30",
    DicePools: ["4d10+6", "4d8+8", "4d6+10"],
    Perks: hordePerks
})

// Leader
const leader: Map<number, enemyPatterns> = new Map()
const leaderPerks: Array<Perk> = [AllPerks.get("Terrifying")!, AllPerks.get("Relentless (X)")!, AllPerks.get("Activate Allies")!, AllPerks.get("Direct Damage")!, AllPerks.get("Call Reinforcements")!, AllPerks.get("Merciless")!, AllPerks.get("Tactician")!]

leader.set(1, {
    Dificulty: [12, 13, 14],
    MajorThreshold: [7, 8, 9],
    SevereThreshold: [13, 14, 15],
    HP: [5, 6, 7],
    Stress: [3, 4],
    ATK: [2, 3, 4],
    DamageAverage: "6-9",
    DicePools: ["1d12+1", "1d10+3", "1d8+5"],
    Perks: leaderPerks
})

leader.set(2, {
    Dificulty: [14, 15, 16],
    MajorThreshold: [12, 13, 14],
    SevereThreshold: [13, 14, 15],
    HP: [5, 6, 7],
    Stress: [3, 4],
    ATK: [3, 4, 5],
    DamageAverage: "12-15",
    DicePools: ["2d12+2", "2d10+4", "2d8+6"],
    Perks: leaderPerks
})

leader.set(3, {
    Dificulty: [17, 18, 19],
    MajorThreshold: [19, 20, 21, 22],
    SevereThreshold: [35, 36, 37, 38, 39, 40],
    HP: [6, 7, 8],
    Stress: [5, 6],
    ATK: [5, 6, 7],
    DamageAverage: "6-9",
    DicePools: ["3d10+1", "3d8+8"],
    Perks: leaderPerks
})

leader.set(4, {
    Dificulty: [19, 20, 21],
    MajorThreshold: [30, 31, 32, 33, 34, 35, 36, 37],
    SevereThreshold: [63, 64, 65, 66, 67, 68, 69, 70],
    HP: [7, 8, 9],
    Stress: [6, 7, 8],
    ATK: [8, 9, 10],
    DamageAverage: "6-9",
    DicePools: ["4d12+6", "4d10+8", "4d8+10"],
    Perks: leaderPerks
})

defaultEnemys.set("Bruiser", bruiser)
defaultEnemys.set("Horde", horde)
defaultEnemys.set("Leader", leader)

export { defaultEnemys, type enemyPatterns, type enemy }
