//Create an array of 10 objects representing bell peppers, specifying the variety, weight, and length for each. Calculate the total weight of all the bell peppers.

const bellPeppers = 
[
    { variety: "Red Bell Pepper", weight: 150, length: 10 },
    { variety: "Yellow Bell Pepper", weight: 180, length: 12 },
    { variety: "Green Bell Pepper", weight: 120, length: 9 },
    { variety: "Orange Bell Pepper", weight: 160, length: 11 },
    { variety: "Purple Bell Pepper", weight: 140, length: 8 },
    { variety: "White Bell Pepper", weight: 130, length: 7 },
    { variety: "Black Bell Pepper", weight: 170, length: 13 },
    { variety: "Brown Bell Pepper", weight: 190, length: 14 },
    { variety: "Pink Bell Pepper", weight: 200, length: 15 },
    { variety: "Blue Bell Pepper", weight: 210, length: 16 }
];

// Function that calculates the total weight of all the bell peppers.
function calculateWeightOfBellPeppers()
{
    // Calculate the total weight of all the bell peppers.
    let totalWeight = 0;

    // Loop through the array of bell peppers.
    for (let i = 0; i < bellPeppers.length; i++)
    {
        // Add the weight of each bell pepper to the total weight.
        totalWeight += bellPeppers[i].weight;
    }
    // Return the total weight of all the bell peppers.
    return totalWeight;
}

// Call the function that calculates the total weight of all the bell peppers.
console.log(calculateWeightOfBellPeppers());

// Bonus:
// Create a bell pepper using a function.
function createBellPepper(variety, weight, length)
{
    // Return a bell pepper object.
    return { variety, weight, length };
}

// Extra Bonus: Add the bell pepper to the array of bell peppers.
function addBellPepperToArray(bellPepper)
{
    // Add the bell pepper to the array of bell peppers.
    bellPeppers.push(bellPepper);
}

