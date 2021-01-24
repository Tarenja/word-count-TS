import { WordCalculator } from "./classes/WordCalculator.js";
import { WordCounter } from "./classes/WordCounter.js";
const stringToTest = "This is an arbitrary string this is";
const counter = new WordCounter(stringToTest, 2, "is");
const calculator = new WordCalculator(stringToTest, "this", 3);
// console.log(counter.getWord());
// console.log(counter.getFrequency());
console.log(calculator.calculateHighestFrequency());
