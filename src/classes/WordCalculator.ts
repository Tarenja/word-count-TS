import { WordFrequencyAnalyzer } from "../interfaces/WordFrequencyAnalyzer.js";

export class WordCalculator implements WordFrequencyAnalyzer {
  constructor() {}

  calculateHighestFrequency(text: string) {
    const frequency = this.splitAndCountWords(text);
    let highestNumber = 0;
    for (const word in frequency) {
      if (frequency[word] > highestNumber) {
        highestNumber = frequency[word];
      }
    }
    return highestNumber;
  }

  calculateFrequencyForWord(text: string, word: string) {
    const frequency = this.splitAndCountWords(text);
    if (frequency[word]) {
      return frequency[word];
    } else {
      return 0;
    }
  }

  calculateMostFrequentNWords(text: string, n: number) {
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

  splitAndCountWords(text: string) {
    let textArray = text
      .toLowerCase()
      .replace(/([^A-Za-z\s])+/g, "")
      .split(" ");
    let frequencyCounts = textArray.reduce((acc, word) => {
      return { ...acc, [word]: (acc[word] || 0) + 1 };
    }, <any>{});
    return frequencyCounts;
  }
}
