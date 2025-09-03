let user ={
    name : "Abdullah",
    age : 24,
    email: "abdullah@gmail.com"
}

//passing object to function
function createUser ({name: string, isPaid: boolean}){
}

createUser({name: "Abdullah", isPaid: false})


// return object by function
function createCourse():{name : string, price: number}{
    return {name: "ReactJS", price: 800}
}

//Type Allies in TypeScript
type User= { 
    name : string;
    age : number;
    email : string;
}

function createAccount (user: User): User{
    return {name : "", age: 10, email:""}
}

createAccount({name: "", age:10, email:""})


type Point = {
    x : number;
    y : number;
}

function printCoord (pt: Point){
console.log("Coordinate of X is " + pt.x)
console.log("Coordinate of Y is " + pt.y)
}

printCoord({x: 10, y: 50})

export {}