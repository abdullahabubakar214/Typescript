"use strict";
// not correct syntax
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    num.toLowerCase(); //change num to string
    return num + 2;
}
// correct syntax
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
}
function logIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
addNum(3);
addTwo(5);
getUpper("abdullah");
signUp("Abdullah", "abdullah@gmail.com", true);
logIn("Abdullah", "abdullah@gmail.com");
