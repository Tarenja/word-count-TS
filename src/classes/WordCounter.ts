import { WordFrequency } from "../interfaces/WordFrequency.js";

export class WordCounter implements WordFrequency {
  private words: string[];

  constructor(
    private text: string,
    private count: number,
    private word?: string
  ) {
    this.words = this.text.split(" ");
  }

  getWord(): string {
    return this.words[this.count];
  }

  getFrequency(): number {
    let counter = 0;
    if (this.word != undefined) {
      for (let word in this.words) {
        if (word === this.word) {
          counter++;
        }
        console.log(word);
      }
      return counter;
    } else {
      return 0;
    }
  }
}
