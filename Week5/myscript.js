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
