

// 1. Convert kilometer to meter function. //

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else {
        return 'Please enter a valid number.';
    }
}

// 2. This is budget calculator function. //

function budgetCalculator(watch, phone, laptop) {
   if((watch >= 0) && (phone >= 0) && (laptop >= 0)){
    var watchPrice = watch * 50; 
   var phonePrice = phone * 100;
   var laptopPrice = laptop * 500;
   totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
   }else{
       return 'Please inter a valid number';
   }
}

// 3. Hotel cost function. //

function hotelCost(dayStay) {
    var dayCost = 0;
    if ((dayStay <= 10) && (dayStay > 0)) {
        dayCost = dayStay * 100;
    } else if ((dayStay <= 20) && (dayStay > 0)) {
        var firstPart = 10 * 100;
        var remainingDay = dayStay - 10;
        var secondPart = remainingDay * 80;
        dayCost = firstPart + secondPart;
    } else if (dayStay > 0) {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDay = dayStay - 20;
        var thirdPart = remainingDay * 50;
        dayCost = firstPart + secondPart + thirdPart;
    } else {
        return "please input a valid Day."
    }
    return dayCost;
}

// 4. This is megaFriend function

function megaFriend(friendsName) {
    maxLeter = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > maxLeter.length) {
            maxLeter = element
        }

    }
    return maxLeter;
}
