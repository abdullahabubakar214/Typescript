"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Abdullah",
    age: 24,
    email: "abdullah@gmail.com"
};
//passing object to function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Abdullah", isPaid: false });
// return object by function
function createCourse() {
    return { name: "ReactJS", price: 800 };
}
function createAccount(user) {
    return { name: "", age: 10, email: "" };
}
createAccount({ name: "", age: 10, email: "" });
function printCoord(pt) {
    console.log("Coordinate of X is " + pt.x);
    console.log("Coordinate of Y is " + pt.y);
}
printCoord({ x: 10, y: 50 });
