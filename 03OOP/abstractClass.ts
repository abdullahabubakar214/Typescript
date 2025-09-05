abstract class TakePhoto {
    constructor(public cameraMode: string, public filter:string){
    }

    //we can write defination of abstract method in abstract class and implement in extended class
    abstract createStory(): void

    getReel(): number{
        //do some complex compution
        return 8
    }
    
}

class Instagram extends TakePhoto{

     constructor(public cameraMode: string, public filter:string, public brust: number){
        super(cameraMode, filter)
    }

    createStory(): void {
        console.log("Story Created Successfully");
        
    }
}

//  abstract classes cannot make their object own there own
// let Obj = new TakePhoto("test", "test")

//but we can make object of class who extend the abstract class
let obj = new Instagram("test", "test", 3)

obj.getReel()


