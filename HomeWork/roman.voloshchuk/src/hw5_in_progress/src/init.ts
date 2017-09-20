import $ from "jquery";

console.log($("body"));

interface IUser{
    name: string,
    age: number,
    isActive: boolean;
}

class User implements IUser{
    public name : string;
    public age : number;
    public isActive: boolean;

    constructor (name: string, age: number, isActive: boolean){
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
}

const basil = new User('basil', 24, true);
const mary = new User('mary', 34, false);
const nick = new User('nick', 37, true);