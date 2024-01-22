var myName = "Austin";
var numberOfStates = 50;
var nine = 5 + 4;
function sayHello() {
    console.log("Hello World!");
}
function checkAge(myName2, age) {
    if (age < 21) {
        console.log("Sorry " + myName2 + ", you aren't old enough to view this page!");
    }
}
var favVeg = ["zukini", "onion", "carrot"];
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}
var pet = {
    myName: "Bradley",
    breed: "shi zhu",
};
console.log(pet.myName + " is a " + pet.breed);
var people = [
    {
        myName: "ted",
        age: "3",
    },
    {
        myName: "bill",
        age: "35",
    },
    {
        myName: "mark",
        age: "13",
    },
    {
        myName: "henry",
        age: "20",
    },
    {
        myName: "will",
        age: "21",
    },
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].myName, people[i].age);
}
function getLength(word) {
    return word.length;
}
var isHappy = getLength("Hello World");
if (isHappy % 2 == 1) {
    console.log("The world is an odd place!");
}
else {
    console.log("The world is nice and even!");
}
