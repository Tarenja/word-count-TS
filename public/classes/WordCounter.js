export class WordCounter {
    constructor(text, count, word) {
        this.text = text;
        this.count = count;
        this.word = word;
        this.words = this.text.split(" ");
    }
    getWord() {
        if (this.count) {
            return this.words[this.count];
        }
        else {
            return this.words[0];
        }
    }
    getFrequency() {
        let counter = 0;
        if (this.word != undefined) {
            for (let i = 0; i < this.words.length; i++) {
                if (this.words[i] === this.word) {
                    counter++;
                }
            }
            return counter;
        }
        else {
            return 0;
        }
    }
}
