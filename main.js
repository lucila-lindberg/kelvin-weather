// This constant shows the constant temp of kelvin
const kelvin = 293;

//Celsius is 273 degrees less than kelvin
var celsius = kelvin - 273; 

//We need to use this equation to convert celsius to fahrenheit
//We need to add the Math.floor function to round the number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

 
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);


