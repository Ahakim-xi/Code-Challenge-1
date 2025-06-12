function calculateBodaFare(){

    let distanceInKmInput = window.prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`)
    let distanceInKm = parseFloat(distanceInKmInput)

    let baseFare = "50ksh";
    let chargePerKm = "15ksh"
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    if(typeof distanceInKm != "number"){
        console.log(`Try entering a correct answer this time`)
        calculateBodaFare()
    }else{
        console.log(`Kama ni ${distanceInKm}km,
            Base fare: KSH${baseFare}
            Fare for a ${distanceInKm}km journey: KSH${totalFare - baseFare}
            Total: KSH${totalFare}
            
            
            Panda Pikipiki!`)
    }
}



