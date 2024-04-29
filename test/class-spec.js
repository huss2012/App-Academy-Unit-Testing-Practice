const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word = new Word("word");
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      let word = new Word("word");
      expect(word.word).to.equal("word");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word = new Word("Apple");
      expect(word.removeVowels()).to.equal("ppl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word = new Word("Apple");
      expect(word.removeConsonants()).to.equal("Ae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word = new Word("apple");//bgins with vowles.
      let word2 = new Word("people")//vowles in between.

      expect(word.pigLatin()).to.equal("appleyay");
      expect(word2.pigLatin()).to.equal("eoplepay")
    });
  });
});
