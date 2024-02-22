const { mongerInventory } = require("./fishMonger.js")

/*
//invoke mongerInventory()
*/
const chefFishPurchase = (maxFishPrice) => {
    const mongerFishes = mongerInventory()
    let chefPurchases = []
    //check price per fish
    for (const mongerFish of mongerFishes) {
        if(mongerFish.price <= maxFishPrice) {
            chefPurchases.push(mongerFish)
        }
    }
    for (const chefFish of chefPurchases) {
        //buys half of fish
        chefFish.amount = chefFish.amount / 2
    }
    //push fish to array
    return chefPurchases
}

const fishMenu = (maxFishPrice) => {
    const fishPurchases = chefFishPurchase(maxFishPrice)
    console.log(`<h1>Menu</h1>`)
    console.log(``)
    console.log(`<article class="menu">`)
    for (const fish of fishPurchases) {
        console.log(`   <h2>${fish.species}</h2>`)
        console.log(`   <section class="menu__item">${fish.species} Soup</section>`)
        console.log(`   <section class="menu__item">${fish.species} Sandwich</section>`)
        console.log(`   <section class="menu__item">Grilled ${fish.species}</section>`)
        console.log(``)
    }
    console.log(`</article>`)
}

module.exports = { fishMenu }

{/* <section class="menu__item">Halibut Soup</section>
<section class="menu__item">Halibut Sandwich</section>
<section class="menu__item">Grilled Halibut</section> */}

// console.log(`<h1>Menu</h1>`)
    // console.log(``)
    // console.log(`<article class="menu">`)

    // console.log(`   <section class="menu__item">${} Soup</section>`)

/*


//create 3 different meals per fish
    //1. soup
    //2. grilled dinner
    //3. sandwich

//return HTML string of daily menu
    




*/


/**The Fish Restaurant
Importing Functions
Since the restaurant needs to see which fish are available at the fishmonger market, it will need to import the function that is exported from that module.

Restaurant Menu
This module must import and invoke the function that is exported by the fish monger module. This module should also define a function that build an HTML version of their daily menu. The function should return the generated HTML string. The function must be named fishMenu.

Each day, the chef visits the monger and specifies the maximum price she is able to spend per fish.
This price must be passed as an argument to the fishMenu function so that it can be passed along to the fishmonger function when the chef buys the fish.
If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory. This constraint will require you to update your fish monger logic!
The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
Tuna Soup
Tuna Sandwich
Grilled Tuna


Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> */