


let myName: string = "Austin";
const numberOfStates: number = 50;

let nine = 5+4;

function sayHello(): void{

    console.log("Hello World!")

}

function checkAge(myName2, age): void {

    if (age <21){
        console.log("Sorry " + myName2 + ", you aren't old enough to view this page!");
    }

}

let favVeg:string[] = ["zukini", "onion", "carrot"];

for(let i=0; i < favVeg.length; i++){

    console.log(favVeg[i]);

}

let pet: IPeople = {

    myName:"Bradley",
    breed:"shi zhu",
}

console.log(pet.myName +" is a " + pet.breed);

interface IPeople{
    myName: string;
    age?: string;
    breed?: string;
}

const people: IPeople[] =[
    {
        myName:"ted",
        age:"3",

    },
    {
        myName:"bill",
        age:"35",

    },
    {
        myName:"mark",
        age:"13",

    },
    {
        myName:"henry",
        age:"20",

    },
    {
        myName:"will",
        age:"21",

    },
];

for(let i=0;i<people.length;i++){
    checkAge(people[i].myName, people[i].age);
}

function getLength(word: string): number{

    return word.length;

}

let isHappy = getLength("Hello World");

if(isHappy%2 == 1){
    console.log("The world is an odd place!");
}else{
    console.log("The world is nice and even!");
}