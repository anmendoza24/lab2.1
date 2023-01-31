alert('Hi! Thanks for visiting my website. ')

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
 }

 function myFunction() {
    document.getElementById("Addition").innerHTML = 5 + 6;
 }

 const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

 let text = "";
 for (let i = 0; i < cars.length; i++) {
   text += cars[i] + "<br>";
   document.getElementById("CARS").innerHTML = text;
 }

 const fruits = new Map([
   ["apples", 500],
   ["bananas", 300],
   ["oranges", 200]
 ]);
 document.getElementById("fruits").innerHTML = fruits.get("apples");


 const letters = new Set(["a","b","c"]);
document.getElementById("letters").innerHTML = letters.size;

let car = "Fiat";
document.getElementById("cars").innerHTML = car;
 