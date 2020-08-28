'use strict';
function calcDiscount(cost, quantity, promocode) {
    let discount = 0;
    if (quantity >= 10) {
        discount = 10;
    } else if (quantity >= 5) {
        discount = 5;
    }
    let newCost = (1 - discount/100) * cost;
    if (newCost >= 100000) {
        discount = 20;
        newCost = 100000 + (newCost - 100000) * (1 - discount/100);
    }
    if (promocode === '15' && newCost >= 25000) {
        discount = 15;
        newCost = (1 - discount/100) * newCost;
    }
    if (promocode === '100') {
        newCost -= 100;
    }
    return newCost > 0 ? Math.floor(newCost) : 0;
}

console.log(calcDiscount(150000, 5, '15')); //113900
console.log(calcDiscount(150000, 10, '100')); //127900
console.log(calcDiscount(100000, 5, '15')); //80750
console.log(calcDiscount(105000, 2)); //104000
console.log(calcDiscount(110, 10, '100')); //0
