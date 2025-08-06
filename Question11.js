

// Literal Objects
let items= {
  productid: "P-002",
  name: "Mechanical Keyboard",
  Quantity: 2,
  Price : 7500,
};

let Payment ={
    method : "Mobile money",
    phone : "0999765242",
    Transactionid : "TXN-900123",
    Success : true
};

let orderTotal ={
    Amount : 40500
}

// Class Object
class items2 {
  constructor(productidt,name,Quantity,Price) {
    this.productid = productidt;
    this.name = name;
    this.Quantity = Quantity;
    this.Price = Price;
  }
}
let Good1 = new items2("P-002","Shawarma",10,120000);

// Function Constructor
function itemsConstructor(productid,name,Quantity,Price) {
  this.productid = productid;
  this.name = name;
  this.Quantity = Quantity;
  this.Price = Price
}
let post2 = new itemsConstructor("P-9009","Beef",12,360000);


//Adding new item bought
items.name = "Beef";

//Updating the transactionid
Payment.Transactionid = "TXN-90986";

//Updating the orderTotal
orderTotal.Amount = 17;


//Demonstrating conversion of object to JSON

let JSONconvert = items(JSON.stringify);
console.log(JSONconvert);

// Demonstrating conversion of JSON back to object

let Objectconvert = JSONconvert(JSON.parse);
console.log(Objectconvert);