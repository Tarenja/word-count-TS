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
            temp.push({ word: word, frequency: frequency[word] });
        }
        temp.sort((a, b) => {
            if (a.frequency > b.frequency) {
                return -1;
            }
            if (a.frequency < b.frequency) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        console.log(temp);
        return [];
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
