class Person {
    // INSTANCE VARIABLES
    protected _name: string = "";

    //CONSTRUCTOR
    constructor(name: string) {
        this._name = name;
    }

    public runs(): void {
        console.log("Your name is: " + this._name);
    }
} 

class Student extends Person {
    private _studentID: number;
    constructor(name: string, studentID: number) {
        super(name);

        this._name = name;
        this._studentID = studentID;
    }

    public studies(): void {
        console.log(this._name + " studies, studentID: " + this._studentID);
    }
}


function init() {
    var student = new Student("Tom", 12345);

    student.studies();
    student.runs();
}