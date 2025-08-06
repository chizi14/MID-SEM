const products = [ {
    id: "P001", name: "Wireless Headphones", category : "Electronics",price: 59.99,inStock : true, tags: ["Audio","wireless","music"],ratings :{
        average : 4.5, reviewsCount : 120 },releaseDate : "2024-05-15"
    },
    {
        id : "P002", name : "Electric Kettle", category: "Home Appliances",price : 29.99,inStock : false, tags: ["Kitchen","Electric","boil"], ratings : { average : 4.0,reviewscount: 85},releaseDate : "2023-11-10"
    },
    {
         id: "P003", name: "Yoga Mat", category : "Sports",price: 19.99,inStock : true, tags: ["Fitness","Yoga","exercise"],ratings :{
        average : 4.7, reviewsCount : 200 },releaseDate : "2022-08-10"

    },
];


//a. Printing each product
console.log(products.forEach);

//b. Printing all items in stock
console.log(products.filter(inStock == "true"));

// c. filtering "electronics"
console.log(products.filter("electronics"));

// d. find product name "blender"
console.log(products.find("Blender"));
    
