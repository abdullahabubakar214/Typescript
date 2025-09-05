// class User { 
//     name: string
//     email: string
//     private readonly city: string = "Lahore"

//     constructor(email: string, name: string){
//         this.name = name;
//         this.email = email
//         // this.city = "Multan"
//     }
// }

class User { 

    //protected is only asseccable in subclass or inherit class not outside class
    protected _courseCount = 1

    // private _courseCount = 1
    private readonly city: string = "Lahore"
    constructor(public email: string, public name: string, private userId: string){
    }

    // mostely getter method are design to expose the private method or properties outside class
    // use to get properties
    get courseCount(): number{
        return this.courseCount
    }
    //setter return nothing
    set courseCount(courseNum){
        if(courseNum <=1 ){
            throw new Error("Course count should be more then 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {

    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const user = new User("Abdullah", "a@abc.com" , "abc123")

//city is not excessable only within the class
// user.city 