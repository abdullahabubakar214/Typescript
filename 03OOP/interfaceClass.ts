interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string

    //methods in interface
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, val: number): number
}

//reopening of the Interface to add new properties
interface User {
    githhubToken: string
}

//we have inhertence in Interface
interface Admin extends User {
    role : "Admin" | "TA" | "Learner"
}

// know we use Admin
let createAccount: Admin = {role: "TA", dbId: 102, email: "a@abd.com" , userId: 123, githhubToken: "abc123",
    startTrail:() => { return "trail started"},
    getCoupon:(name: "Abdullah", off: 10) => { return 123}
 }

createAccount.email = "b@abc.com"
// createAccount.dbId = 123

export {}