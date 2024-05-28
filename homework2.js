//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



function favFood(obj){
    let arr = [];
    for(let key in obj){
        if(Array.isArray(obj[key])){
            arr.push(obj[key]);
        }else if(typeof obj[key] === 'object'){
            for(let key2 in obj[key]){
                arr.push(obj[key][key2]);
            }
        }else{
            arr.push(obj[key]);
        }
    }
    return arr.join(', ');
}

console.log(favFood(person3));



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
    this.addAge = (num) => {
        this.age += num;
    }
}


// Use an arrow to create the printInfo method

// Use an arrow to create the addAge method

let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

person1.printInfo();
person2.printInfo();




// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

person1.addAge(3);


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word".
    If the length of the string is less than 10 console log "Small Number"
*/

let checkString = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve('Big word');
        }else{
            reject('Small Number');
        }
    });
}

checkString('hello').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

