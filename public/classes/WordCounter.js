export class WordCounter {
    constructor() {
        this.word = "";
        this.frequency = 0;
    }
    getWord() {
        return this.word;
    }
    getFrequency() {
        return this.frequency;
    }
    setWord(word) {
        this.word = word;
    }
    setFrequency(n) {
        this.frequency = n;
    }
}
