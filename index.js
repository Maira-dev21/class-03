"use strict";
// function 
function newfunction() {
    console.log("awais");
}
console.log(2);
newfunction();
console.log(3);
newfunction();
//function sum
function sum() {
    var num1 = 10;
    var num2 = 15;
    var sum = num1 + num2;
    console.log("sum", sum);
}
sum();
// now if the  want to value change in function 
// now use parameters
function abc(_num1) {
    var sum = _num1 + _num1;
    console.log("sum", sum);
}
abc(11);
abc(20);
// two values
function value(_num1, _num2) {
    var sum = _num1 + _num2;
    console.log("sum", sum);
}
value(11, 21);
value(20, 23);
// my name add
function value2(_num1, _num2, Myname) {
    var sum = _num1 + _num2;
    console.log("sum", sum);
    console.log(Myname);
}
value2(10, 10, "awais");
value2(5, 5, "fatima");
///
function sataticsum(_num1, _num2) {
    var sum = _num1 + _num2;
    return sum;
}
console.log(sataticsum(12, 5) + 40);
// option return
function variable(_num1, _num2) {
    var sum = _num1;
    if (_num2) {
        var _sum = _num1 + _num2;
        return sum;
    }
    else {
        console.log("invalid");
        return sum;
    }
}
variable(45, 67);
console.log(variable(45, 65) / 7);
// variable may function type 
const sum6 = (number7, number8) => {
    var number9 = number7 + number8;
    console.log("inside function", number9);
    return sum;
};
sum6(12, 19);
