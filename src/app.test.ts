import { WordCalculator } from "./classes/WordCalculator";

const textToTest =
  "This is an arbitrary string this is is always believe in yourself who is who";
const wordToTest = "this";
const calculator = new WordCalculator();

test("calculate the highest frequency a word has", () => {
  expect(calculator.calculateHighestFrequency(textToTest)).toBe(4);
});

test("calculate the frequency for a given word", () => {
  expect(calculator.calculateFrequencyForWord(textToTest, wordToTest)).toBe(2);
});

console.log(
  "part three",
  calculator.calculateMostFrequentNWords(textToTest, 2)
);
