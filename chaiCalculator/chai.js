function calculateChaiIngredients(){
    let water = 200
    let milk = 50
    let tea = 1
    let sugar = 2
    let numbOfCupsInput = window.prompt(`How many cups of tea would you like?`)
    let numbOfCups = parseFloat(numbOfCupsInput)

    if(typeof numbOfCups != "number"){
        console.log(`Please Input a Correct Answer.`)
        calculateChaiIngredients()
    }else{
        water = numbOfCups * water
        milk = milk * numbOfCups
        tea = tea * numbOfCups
        sugar = sugar * numbOfCups
        console.log(`To make ${numbOfCups} cups of Kenyan Chai, you will need:
            Water: ${water}ml,
            Milk: ${milk}ml
            Tea Leaves (Majani): ${tea} tablespoons
            Sugar (Sukari): ${sugar} teaspoons.
            
            Enjoy your Chai Bora!`)
    }
}
