class Teddy{
    constructor (id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = image;
    }
}
let norbert = new Teddy(
    "5be9c8541c9d440000665243", "Norbert", 2900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_1.jpg",
    /*"colors":["Tan","Chocolate","Black","White"]"*/
); 
let arnold = new Teddy(
    "5beaa8bf1c9d440000a57d94", "Arnold", 3900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_2.jpg", 
    /*"colors":["Pale brown","Dark brown","White"],*/
); 
let lennyAndCarl = new Teddy(
    "5beaaa8f1c9d440000a57d95", "Lenny and Carl", 5900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_3.jpg",
    /*"colors":["Brown"],*/
);  
let gustav = new Teddy(
    "5beaabe91c9d440000a57d96", "Gustav", 4500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_4.jpg",
    /*"colors":["Brown","Blue","Pink"], */
);  
let garfunkel = new Teddy(
    "5beaacd41c9d440000a57d97", "Garfunkel", 5500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_5.jpg"
    /*"colors":["Beige","Tan","Chocolate"],*/
); 
console.log(norbert);
console.log(arnold);
console.log(lennyAndCarl);
console.log(gustav);
console.log(garfunkel);