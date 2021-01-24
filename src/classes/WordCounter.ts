import { WordFrequency } from "../interfaces/WordFrequency.js";

export class WordCounter implements WordFrequency {
  word: string = "";
  frequency: number = 0;
  constructor() {}

  getWord(): string {
    return this.word;
  }

  getFrequency(): number {
    return this.frequency;
  }

  setWord(word: string) {
    this.word = word;
  }

  setFrequency(n: number) {
    this.frequency = n;
  }
}
