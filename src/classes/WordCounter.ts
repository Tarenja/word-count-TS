import { WordFrequency } from "../interfaces/WordFrequency.js";

export class WordCounter implements WordFrequency {
  private words: string[];

  constructor(
    private text: string,
    private count?: number,
    private word?: string
  ) {
    this.words = this.text.split(" ");
  }

  getWord(): string {
    if (this.count) {
      return this.words[this.count];
    } else {
      return this.words[0];
    }
  }

  getFrequency(): number {
    let counter = 0;
    if (this.word != undefined) {
      for (let i = 0; i < this.words.length; i++) {
        if (this.words[i] === this.word) {
          counter++;
        }
      }
      return counter;
    } else {
      return 0;
    }
  }
}
