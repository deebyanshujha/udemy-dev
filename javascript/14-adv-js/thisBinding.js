class Details{
    name = "Deebynashu";
    greet(){
        console.log(`Hello, I am ${this.name}`)
    }
}

//bind, call, and apply cannot change this of an arrow function
// bind ----> if we want to pass the class function to a variable then the "this" keyword loses its identity hence we have to manully give it.
const obj = new Details()
let functionStorage = obj.greet.bind({name: "Karan"})
functionStorage();

// call --> simple call
obj.greet.call({name: "Rahul"}); //it takes other without "this" arguments as normal argument

obj.greet.apply({name:"Chat"}); // it takes other without "this" arguments as array input 

