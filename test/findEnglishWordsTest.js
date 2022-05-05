const assert = require("chai").assert;
const { findEnglishWords } = require("../word");

describe("findEnglishWords", () => {
  describe("the function returns an array of English words", () => {
    it("returns an array of English words from the word dog", () => {
      const dogArray = ["d", "dg", "do", "dog", "g", "o", "og"];
      const expectedArray = ["do", "dog"];
      const dogArrayOnlyEnglish = findEnglishWords(dogArray);
      for (let i in dogArrayOnlyEnglish) {
        assert.equal(dogArrayOnlyEnglish[i], expectedArray[i]);
      }
    });
  });

  describe("test working input for the function", () => {
    let workingExpectedArrayOnlyEnglish = null;
    before(() => {
      workingExpectedArrayOnlyEnglish = [
        "in",
        "ing",
        "ki",
        "kin",
        "king",
        "oi",
        "on",
        "or",
        "rig",
        "rin",
        "ring",
        "wig",
        "win",
        "wing",
        "wo",
        "wog",
        "wok",
        "won",
        "work",
        "working",
        "worn",
        "wring",
      ];
    });
    it("returns an array of English words from the word working", () => {
      let workingArray = [
        "g",
        "i",
        "ig",
        "in",
        "ing",
        "k",
        "kg",
        "ki",
        "kig",
        "kin",
        "king",
        "kn",
        "kng",
        "n",
        "ng",
        "o",
        "og",
        "oi",
        "oig",
        "oin",
        "oing",
        "ok",
        "okg",
        "oki",
        "okig",
        "okin",
        "oking",
        "okn",
        "okng",
        "on",
        "ong",
        "or",
        "org",
        "ori",
        "orig",
        "orin",
        "oring",
        "ork",
        "orkg",
        "orki",
        "orkig",
        "orkin",
        "orking",
        "orkn",
        "orkng",
        "orn",
        "orng",
        "r",
        "rg",
        "ri",
        "rig",
        "rin",
        "ring",
        "rk",
        "rkg",
        "rki",
        "rkig",
        "rkin",
        "rking",
        "rkn",
        "rkng",
        "rn",
        "rng",
        "w",
        "wg",
        "wi",
        "wig",
        "win",
        "wing",
        "wk",
        "wkg",
        "wki",
        "wkig",
        "wkin",
        "wking",
        "wkn",
        "wkng",
        "wn",
        "wng",
        "wo",
        "wog",
        "woi",
        "woig",
        "woin",
        "woing",
        "wok",
        "wokg",
        "woki",
        "wokig",
        "wokin",
        "woking",
        "wokn",
        "wokng",
        "won",
        "wong",
        "wor",
        "worg",
        "wori",
        "worig",
        "worin",
        "woring",
        "work",
        "workg",
        "worki",
        "workig",
        "workin",
        "working",
        "workn",
        "workng",
        "worn",
        "worng",
        "wr",
        "wrg",
        "wri",
        "wrig",
        "wrin",
        "wring",
        "wrk",
        "wrkg",
        "wrki",
        "wrkig",
        "wrkin",
        "wrking",
        "wrkn",
        "wrkng",
        "wrn",
        "wrng",
      ];
      const expectedArray = workingExpectedArrayOnlyEnglish;
      const workingArrayOnlyEnglish = findEnglishWords(workingArray);
      for (let i in workingArrayOnlyEnglish) {
        assert.equal(workingArrayOnlyEnglish[i], expectedArray[i]);
      }
    });

    it("the function dosn't return an array that includes duplicates", () => {
      let duplicateWord = [];
      workingExpectedArrayOnlyEnglish.forEach((word) => {
        if (duplicateWord.includes(word)) {
          duplicateWord.push(word);
        }
      });
      assert.equal(duplicateWord.length, 0);
    });
  });

  describe("the function returns false when the array doesn't include an English word", () => {
    const noEnglishWord = ["xx", "yy"];
    assert.isFalse(findEnglishWords(noEnglishWord));
  });
});
