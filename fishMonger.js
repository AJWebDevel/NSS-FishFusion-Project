//This gets the fish inventory from the fishingBoat.js
const { getBoatInventory } = require("./fishingBoat.js")

const fishOnBoatArray = getBoatInventory()

let customerMaxPrice = 7

const fishMongerOfferings = []
//function that generates fishmonger inventory (an array of objects)
//if fish quantity <10, no buy
//if fish > 7.50$, no buy
/*restaurant can make max budget so if customer max budget is (ex) $4, 
it shouldn't show fish over 4$ in array */
const mongerInventory = (maxCustomerCost) => {
    for (const fish of fishOnBoatArray) {
        if (fish.amount >= 10 && fish.price <= 7.50 && fish.price <= customerMaxPrice) {
            //each fish must have quantity of 10 in final array
            fish.amount = 10
            fishMongerOfferings.push(fish)
        }

    }
    return fishMongerOfferings
}


console.log(mongerInventory(customerMaxPrice))

module.exports = { mongerInventory }
