export class WordCounter {
    constructor(text, count, word) {
        this.text = text;
        this.count = count;
        this.word = word;
        this.words = this.text.split(" ");
    }
    getWord() {
        return this.words[this.count];
    }
    getFrequency() {
        let counter = 0;
        if (this.word != undefined) {
            for (let word in this.words) {
                if (word === this.word) {
                    counter++;
                }
                console.log(word);
            }
            return counter;
        }
        else {
            return 0;
        }
    }
}
