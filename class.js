class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "BMS School";
    }
}

const student1 = new student(16, "Mitu");
const student2 = new student(17, "ritu");
console.log(student1, student2);
console.log(`The name the first student is ${student1.name}`);