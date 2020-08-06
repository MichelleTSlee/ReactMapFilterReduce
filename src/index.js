import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

let numbers = [2, 4, 6];

//Map - creates a new array by doing something to each item in array
let doubledNumber = numbers.map((num) => num * 2);
console.log(doubledNumber);

//Filter - checks each item in an array to see if it meets a condition
let lessThanNumber = numbers.filter((num) => num < 6);
console.log(lessThanNumber);

//Reduce - Reduces array to one value by applying accumulator to item. Result becomes new accumulator - continues until one value is returned
let totalNumbers = numbers.reduce((accumulator, num) => accumulator + num);
console.log(totalNumbers);

//Find - returns first value that matches the condition
let firstMatchNum = numbers.find((num) => num > 2);
console.log(firstMatchNum);

//Index - returns index of first value that matches the condition
let firstIndex = numbers.findIndex((num) => num > 2);
console.log(firstIndex);

ReactDOM.render(<App />, document.getElementById("root"));
