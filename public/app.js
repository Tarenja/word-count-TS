import { WordCalculator } from "./classes/WordCalculator.js";
const textToTest = "This is an arbitrary string this is is always believe in yourself who is who";
const wordToTest = "this";
const calculator = new WordCalculator();
const topNumberOfWords = 5;
const highestFrequency = `The most amount of times a word occurs is: ${calculator.calculateHighestFrequency(textToTest)}`;
const frequencyForWord = `The amount of times the word '${wordToTest}' appears in the tested text is: ${calculator.calculateFrequencyForWord(textToTest, wordToTest)}`;
const counter = calculator.calculateMostFrequentNWords(textToTest, topNumberOfWords);
let nWordsFrequency = `These are the ${topNumberOfWords} highest occuring words in this text:\n `;
for (let i = 0; i < counter.length; i++) {
    let word = counter[i].getWord();
    let freq = counter[i].getFrequency();
    nWordsFrequency += `"${word}", ${freq},\n`;
}
const container = document.getElementById("word-counter");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
p1.innerText = highestFrequency;
p2.innerText = frequencyForWord;
p3.innerText = nWordsFrequency;
container === null || container === void 0 ? void 0 : container.append(p1);
container === null || container === void 0 ? void 0 : container.append(p2);
container === null || container === void 0 ? void 0 : container.append(p3);
