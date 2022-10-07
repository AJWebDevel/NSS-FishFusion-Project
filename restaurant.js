//below line invokes function from fishMonger.js to import fish data
const { mongerInventory } = require("./fishMonger.js")

const fishMongerHasInStock = mongerInventory()


/*function below will
1. iterate through monger's inventory to find if fish price <max price
 2. buy 50% of the inventory of those fish under max price
 3. generate  an HTML formatted menu for the restaurant depending on what fish they bought 
*/
const menuFishArray = []

const fishMenu = (chefPrice) => {
    for (const fish of fishMongerHasInStock) {
        if (fish.price < chefPrice) {
            menuFishArray.push(fish)
            fish.amount = fish.amount * .5
        }
    }
    let myMenu = ""
    for (const fish of menuFishArray) {
        myMenu += `<h1>Menu</h1> \n`
        myMenu += `<article class="menu> \n`
        myMenu += `<h2>${fish.species}</h2> \n`
        myMenu += `<section class="menu_item>${fish.species} Soup</section>\n`
        myMenu += `<section class="menu_item>${fish.species} Sandwich</section> \n`
        myMenu += `<section class="menu_item>Grilled ${fish.species}</section> \n`
        myMenu += `</article> \n`

    }
    return myMenu
}


module.exports = { fishMenu }