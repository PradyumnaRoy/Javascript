//classes and objects are same as Java
class Student {
    constructor() {
        console.log("This is constructor....")
    }
    print() {
        console.log("hello world....")
    }
}
let st = new Student();
st.print();  //if we do not call making a object like this then print method will not be executed ever
// Student.print(); // This is not possible in jS