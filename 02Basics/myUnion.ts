//Union in Typescript
let score: number | String = 33

score = "44"


type User = {
    name: string;
    id: string;
}

type Admin = {
    username: String;
    id: string
}

let createUser: User | Admin = {name: "Abdullah", id: "102"}

createUser = {username: "Abu Bakar", id: "102"}

// Union with function 

function getDbId(id: number | string){
    console.log(`Database ID is ${id}`)

}

getDbId(3)
getDbId("3")

// id would come up with new datatype number or string
function setDbId(id: number | string){

    // id.toLowerCase()  it gives error
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id + 2
    } 
}


// Arrays

let data: number[] = [1,2,3]
let data2: string[] = ["1","2","3"]

//either array data is number or string not both of that.
let data3: string[] | number[] = ["1", "2", "3"]

let data4: (string | number | boolean)[] = ["1", 2, true]


let seatAlotment: "aisle" | "middle" | "window"

seatAlotment = "window"
// seatAlotment = "crew"    error bz we only select from above given 