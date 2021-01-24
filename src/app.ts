import { WordCalculator } from "./classes/WordCalculator.js";
import { WordCounter } from "./classes/WordCounter.js";

const textToTest =
  "This is an arbitrary string this is is always believe in yourself who is who";
const wordToTest = "this";
const calculator = new WordCalculator();

console.log(
  "The most amount of times a word occurs is:",
  calculator.calculateHighestFrequency(textToTest)
);
console.log(
  `The amount of times the word '${wordToTest}' appears in the tested text is: ${calculator.calculateFrequencyForWord(
    textToTest,
    wordToTest
  )}`
);
console.log(
  "part three",
  calculator.calculateMostFrequentNWords(textToTest, 2)
);
