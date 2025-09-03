// not correct syntax
function addNum(num){
    num.toLowerCase() //change num to string
    return num +2 
}

// correct syntax
function addTwo (num: number){
    return num + 2
}

function getUpper (val: string){
    return val.toUpperCase()
}

function signUp(name: string, email: string, isPaid: boolean){
}

function logIn(name: string, email: string, isPaid: boolean = true){ // default value
}

addNum(3)
addTwo(5)
getUpper("abdullah")
signUp("Abdullah", "abdullah@gmail.com", true)
logIn("Abdullah", "abdullah@gmail.com")

//Arrow Function
const getHello = (val: string):string =>{
    return ""
}

const heros = ["thor", "Superman", "Batman"]
// const heros = [1,2,3]

heros.map((hero):string =>{     // it always return string if we dont give datatype it will reutrn any data
    return `hello to my ${hero}`})

// this function return nothing
function consoleError (errMsg : string): void{
    console.log(errMsg)
}

//this function never reutrn a value-- this means function throw error or forcefully terminate execution of program
function handleError (errMsg : string): never{
    throw new Error(errMsg);
}


export { }