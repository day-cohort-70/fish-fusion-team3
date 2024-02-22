const { boatInventory } = require("./fishingBoat.js")



const mongerInventory = () => {
// create variable todaysCatch as  boatInventory
const todaysCatch = boatInventory()

// create variable for monger purchases
let mongerPurchases = []

    for (fish of todaysCatch) {
        // check todaysCatch for prices <= 7.5 
        // check if species amount >= 10
        if (fish.price <= 7.50 && fish.amount >= 10) {
            // push to mongerPurchases array
            mongerPurchases.push(fish)
        }
    }

    for (const mongerFish of mongerPurchases) {
        //mongerPurchases.amount = 10
        mongerFish.amount = 10
    }
    
    // return value of mongerPurchases
    return mongerPurchases
}

module.exports = { mongerInventory }











/**Fishmonger
Importing Functions
Since the fish monger needs to see what the fresh catch of the day is, it will need to import the function that is defined in the fishing boat module. You use the require() function to grab what another module exported.

Example
const { functionVariable } = require("./fishingBoat.js")
Monger Inventory
This module must import and invoke the function that is exported by the fishing boat module. This module should also define and export its own function that generates its own inventory that restaurants can use to purchase fish for their daily menus. The returned inventory should be an array of objects.

The exported function must be named mongerInventory.

Pro Tip: It is very important that you read all of these requirements and constraints and define your algorithm before you write any code.

Fish Monger Purchasing Constraints


Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
Those are the basic requirements of the fish monger. Once you have an array of the fish objects that meet those requirements, you then need to determine which of those fish meet the requirements of a chef.

Chef Purchasing Constraints
The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less. This could be any amount and will be information that will be provided to the monger inventory function.

From your array of purchased fish, you must filter that down to the fish that meet the price constraint of the restaurant chef.

Once you have that final array of fish, return that array. */