"use strict";
function add(n1, n2, showResult) {
    return showResult ? n1 + n2 : null;
}
var number1;
number1 = 34;
var number2 = 10;
var isShowResult = true;
var result = add(number1, number2, isShowResult);
var Role;
(function (Role) {
    Role["ADMIN"] = "123";
    Role["READ"] = "345";
    Role["author"] = "1245";
})(Role || (Role = {}));
var person = {
    name: "Nika",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.author
};
var activities;
activities = [11, 'dfgg', 'fdfdf', 'ffvfv'];
function combine(n1, n2, resultConv) {
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConv === 'as-num') {
        return +n1 + +n2;
    }
    return n1.toString() + n2.toString();
}
function sum(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Res' + num);
}
function printRes1(num) {
    console.log('Res' + num);
    return;
}
var combineValues;
combineValues = sum;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var userInput;
var userValue;
var userAge;
var useName;
userInput = 5;
userInput = "Max";
userValue = 23;
if (typeof userInput === 'string') {
    useName = userInput;
}
userAge = userValue;
function genError(mes, code) {
    throw { message: mes, errorCode: code };
}
console.log('sending data..');
console.log(121);
console.log(125671);
var button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('clicked');
});
var set = new Set();
var rect1 = {
    id: 'f',
    size: 12
};
var rect3 = {
    id: '45',
    size: 20,
    area: function () {
        return Math.pow(this.size, 2);
    }
};
var Rectus = (function () {
    function Rectus() {
        this.id = '4343';
        this.size = 123;
    }
    Rectus.prototype.area = function () {
        return this.size * 2;
    };
    return Rectus;
}());
console.log(new Rectus());
