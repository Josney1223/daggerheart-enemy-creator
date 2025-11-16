interface enemy {
    Dificulty: Array<number>,
    MajorThreshold: Array<number>,
    SevereThreshold: Array<number>,
    HP: Array<number>,
    Stress: Array<number>,
    ATK: Array<number>,
    DamageAverage: string,
    DicePools: Array<string>
}

const defaultEnemys: Map<string, Map<number, enemy>> = new Map()

// "Bruiser",
// "Horde",
// "Leader",
// "Minions",
// "Ranged",
// "Skulks",
// "Solo",
// "Standard",
// "Support",

const bruiser: Map<number, enemy> = new Map()

bruiser.set(1, {
    Dificulty: [12, 13, 14],
    MajorThreshold: [7, 8, 9],
    SevereThreshold: [13, 14, 15],
    HP: [5, 6, 7],
    Stress: [3, 4],
    ATK: [0, 1, 2],
    DamageAverage: "8-11",
    DicePools: ["1d12+2", "1d10+4", "1d8+6"],
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
})

defaultEnemys.set("Bruiser", bruiser)

export { defaultEnemys, type enemy }
