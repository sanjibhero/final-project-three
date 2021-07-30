
//kilometerToMeter


function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}
var kilometer = kilometerToMeter(8)
console.log(kilometer);


//budgetCalculatar


function budgetCalculatar(watch, phone, laptop){
    var watchCount =  watch * 5;
    var phoneCount = phone * 5;
    var laptopCount = laptop * 5;
    return totalPrice = watchCount + phoneCount + laptopCount;
}

var totalBudget = budgetCalculatar(100 ,200, 500);
console.log(totalBudget);
