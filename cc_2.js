//task 1 

let products = ["Milk", "Bread", "Chicken", "Oil", "Eggs"]; //an array of 5 products
products.push("Mayo"); //adds a new product
products.pop(); //removes last product

console.log(products);


//task 2 
let scores = [94, 85, 77, 99, 65]; //array of 5 scores
scores[1] = 90; //second score changed to 90
let scores_total = scores.reduce((sum, score) => sum + score, 0);
avg_scores = scores_total / scores.length; // sum of scores divided by the lenght of the array 

console.log(avg_scores);

//task 3 
let employee = {

    name: "Ramazan Gaparov",
    age: 60,
    department: "IT",
    isActive: true

};

employee.department = "Customer Service"; //updating department to customer service
employee.position = "Sales Representative";//new property added

console.log(employee)


//task 4 

let customers = [{  //array of 3 objects with 3 properties

name: "Evan Smith",
email: "evansmith@gmail.com",
purchaseAmount: 45},

{name: "Conan Barbarian",
email: "conanb@gmail.com",
purchaseAmount: 70},

{name: "Mary Baker",
email: "bakermary@gmail.com",
purchaseAmount: 30},

];

customers.push({    //adding a new object into an array
    name: "Henry Ford",
    email: "Ford@gmail.com",
    purchaseAmount: 77

});

console.log(customers)


//task 5 

let order = {       //object with 3 properties 

    orderId: 78954,
    customerName: "John Cotton",
    amount: 1000,
    calculateTax: function() {      //function that returns amount + 10% tax
        return this.amount * 0.1;
    }
    };
    
    
    console.log(order);
    console.log(order.calculateTax());

