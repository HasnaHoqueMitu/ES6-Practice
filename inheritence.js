class Parent{
    constructor(){
        this.fatherName = "Abdul Hoque";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    //to write a function in the cls u don't need to write function key word
    getFullName (){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Hasna Hoque");
console.log(baby);
console.log(baby.getFullName());