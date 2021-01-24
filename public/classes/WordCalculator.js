import { WordCounter } from "./WordCounter.js";
export class WordCalculator {
    constructor() { }
    calculateHighestFrequency(text) {
        const frequency = this.splitAndCountWords(text);
        let highestNumber = 0;
        for (const word in frequency) {
            if (frequency[word] > highestNumber) {
                highestNumber = frequency[word];
            }
        }
        return highestNumber;
    }
    calculateFrequencyForWord(text, word) {
        const frequency = this.splitAndCountWords(text);
        if (frequency[word]) {
            return frequency[word];
        }
        else {
            return 0;
        }
    }
    calculateMostFrequentNWords(text, n) {
        let temp = [];
        const frequency = this.splitAndCountWords(text);
        for (const word in frequency) {
            let counter = new WordCounter();
            counter.setWord(word);
            counter.setFrequency(frequency[word]);
            temp.push(counter);
        }
        temp.sort((a, b) => {
            return b.frequency - a.frequency || a.word.localeCompare(b.word);
        });
        return temp.slice(0, n);
    }
    splitAndCountWords(text) {
        let textArray = text
            .toLowerCase()
            .replace(/([^A-Za-z\s])+/g, "")
            .split(" ");
        let frequencyCounts = textArray.reduce((acc, word) => {
            return Object.assign(Object.assign({}, acc), { [word]: (acc[word] || 0) + 1 });
        }, {});
        return frequencyCounts;
    }
}
