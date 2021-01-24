export class WordCalculator {
    constructor(text, word, num) {
        this.text = text;
        this.word = word;
        this.num = num;
        this.sortedWords = [];
        this.textArray = this.text
            .toLowerCase()
            .replace(/([^A-Za-z\s])+/g, "")
            .split(" ");
        this.frequencyCounts = this.textArray.reduce((acc, word) => {
            return Object.assign(Object.assign({}, acc), { [word]: (acc[word] || 0) + 1 });
        }, {});
    }
    calculateHighestFrequency(text = this.text) {
        let highestNumber = 0;
        for (const word in this.frequencyCounts) {
            if (this.frequencyCounts[word] > highestNumber) {
                highestNumber = this.frequencyCounts[word];
            }
        }
        return highestNumber;
    }
    calculateFrequencyForWord(text, word) {
        return 0;
    }
    calculateMostFrequentNWords(text, n) {
        return [];
    }
}
