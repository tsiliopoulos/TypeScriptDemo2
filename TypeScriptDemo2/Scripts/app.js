var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    //CONSTRUCTOR
    function Person(name) {
        // INSTANCE VARIABLES
        this._name = "";
        this._name = name;
    }
    Person.prototype.runs = function () {
        console.log("Your name is: " + this._name);
    };
    return Person;
})();
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, studentID) {
        _super.call(this, name);
        this._name = name;
        this._studentID = studentID;
    }
    Student.prototype.studies = function () {
        console.log(this._name + " studies, studentID: " + this._studentID);
    };
    return Student;
})(Person);
function init() {
    var student = new Student("Tom", 12345);
    student.studies();
    student.runs();
}
//# sourceMappingURL=app.js.map