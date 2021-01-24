# word-count-TS

Typescript word count assignment

The case: counting words.

## Introduction

Your task is to implement part of a text processing library.

The following are assumptions and definitions that limit the scope of the task:

- Word: To simplify, a word is represented by a sequence of one or more characters between „a‟ and „z‟ or between „A‟ and „Z‟). For example “agdfBh”.
- Letter Case: When counting frequencies, we are interested in the case insensitive frequency (i.e. in the text “The sun shines over the lake”, the library should count 2 occurrences for any of the words “the” or “The” or “tHE” etc).
- Input Text: The input text contains words separated by various separator characters. Note that the characters from „a‟ and „z‟ and from „A‟ and „Z‟ can only appear within words.
- Available Memory: There is enough memory to store the whole input text.

## Implementation (Typescript version)

```typescript
//Create a class which implements the following interface:

interface WordFrequency {
  getWord(): string;
  getFrequency(): number;
};

//Create a class which implements the following interface:

interface WordFrequencyAnalyzer {
  calculateHighestFrequency(text: string): number;
  calculateFrequencyForWord (text: string, word: string): number;
  List<WordFrequency> calculateMostFrequentNWords (text: string, n: number);
};
```
  
Implement the three methods defined in this interface

- CalculateHighestFrequency should return the highest frequency in the text (several words might actually have this frequency)
- CalculateFrequencyForWord should return the frequency of the specified word
- CalculateMostFrequentNWords should return a list of the most frequent „n‟ words in the input text, all the words returned in lower case. If several words have the same frequency, this method should return them in ascendant alphabetical order (for input text “The sun shines over the lake” and n = 3, it should return the list {(“the”, 2), (“lake”, 1), (“over”, 1) }

## Test Cases

Implement test cases for this class. You may use 3rd party frameworks to support your
tests.

## Submission

Return deliverables as Github or Gitlab public repository

As a final note, please follow the instructions (which are not complicated) and perform the tasks on an industry standard level.
