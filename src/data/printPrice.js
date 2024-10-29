// Exporterar objektet darkPrintPrice som innehåller priser för tryckning
export const darkPrintPrice = {
    amount: {
        // Priser beroende på kvantitet av tryckta objekt
        25: [39, 49, 59, 69, 79, 89, 99],  // Priser för 25 stycken
        50: [27, 35, 43, 51, 59, 67, 74],  // Priser för 50 stycken
        100: [18, 23, 28, 33, 38, 43, 48], // Priser för 100 stycken
        250: [13, 16, 19, 21, 24, 27, 30], // Priser för 250 stycken
        500: [10, 12, 14, 16, 18, 20, 22], // Priser för 500 stycken
    },
    schablon: {
        // Fast kostnad beroende på olika tjänster
        1: 600,
        2: 950,
        3: 1275,
        4: 1640,
        5: 2000,
        6: 2340,
        7: 2660,
        8: 2960,
        9: 3330,
        10: 3700
    }
};

// Exporterar en array med priser per tryck
export const pricePerPrint = [
    {
        amount: [
            // Priser per tryck för olika kvantiteter
            [39, 49, 59, 69, 79, 89, 99], // Första kvantiteten
            [39, 49, 59, 69, 79, 89, 99], // Andra kvantiteten
            [39, 49, 59, 69, 79, 89, 99], // Tredje kvantiteten
            [39, 49, 59, 69, 79, 89, 99], // Fjärde kvantiteten
            [39, 49, 59, 69, 79, 89, 99], // Femte kvantiteten
        ]
    },
    {
        schablon: [
            // Fast kostnad för olika tjänster
            600,
            950,
            1275,
            1640,
            2000,
            2340,
            2660,
            2960
        ]
    }
];


