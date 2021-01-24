import { WordFrequencyAnalyzer } from "../interfaces/WordFrequencyAnalyzer.js";
import { WordCounter } from "./WordCounter.js";

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
    let temp: WordCounter[] = [];
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
    return temp;
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
