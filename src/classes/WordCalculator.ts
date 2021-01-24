import { WordFrequencyAnalyzer } from "../interfaces/WordFrequencyAnalyzer.js";

export class WordCalculator implements WordFrequencyAnalyzer {
  private textArray: string[];
  private frequencyCounts: { [k: string]: number };
  private sortedWords: [] = [];
  constructor(private text: string, private word: string, private num: number) {
    this.textArray = this.text
      .toLowerCase()
      .replace(/([^A-Za-z\s])+/g, "")
      .split(" ");
    this.frequencyCounts = this.textArray.reduce((acc, word) => {
      return { ...acc, [word]: (acc[word] || 0) + 1 };
    }, <any>{});
  }

  calculateHighestFrequency(text: string = this.text) {
    let highestNumber = 0;
    for (const word in this.frequencyCounts) {
      if (this.frequencyCounts[word] > highestNumber) {
        highestNumber = this.frequencyCounts[word];
      }
    }
    return highestNumber;
  }

  calculateFrequencyForWord(text: string, word: string) {
    return 0;
  }

  calculateMostFrequentNWords(text: string, n: number) {
    return [];
  }
}
