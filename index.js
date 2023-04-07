function distanceFromHqInBlocks(locationPickUp) {
    const endLocation = 42;
    let amtBlocks = Math.abs(locationPickUp - endLocation);
    return amtBlocks

}

function distanceFromHqInFeet(locationPickUp){
    return distanceFromHqInBlocks(locationPickUp) * 264

}

function distanceTravelledInFeet(locationPickUp, endLocation){
    let pickUpInFeet = locationPickUp * 264;
    let endLocationInFeet = endLocation * 264
    return Math.abs(pickUpInFeet - endLocationInFeet)
    return blocksToFeet;
}

function calculatesFarePrice(locationPickUp, endLocation){
    
   let distanceFeet = distanceTravelledInFeet(locationPickUp, endLocation);
   let fare;
   let fareWithoutRounding;
    if (distanceFeet <= 400){
        fare = 0;
    }else if (distanceFeet > 400 && distanceFeet < 2000){
        fareWithoutRounding = ((distanceFeet * .02)-(.02*400))
        fare = parseFloat(fareWithoutRounding.toFixed(2));
        
    }else if (distanceFeet > 2000 && distanceFeet < 2500){
        fare = 25;

    }else if (distanceFeet >= 2500){
        fare = "cannot travel that far";

    }
    return fare
}