import { decomposeToPhonemes } from '../src/utils/phonicsUtils.js';
import assert from 'assert';

console.log("🚀 Đang chạy Unit Test cho thuật toán 'Greedy Phoneme Segmentation'...");

const testCases = [
  { word: "boat", expected: ["b", "oa", "t"] },
  { word: "train", expected: ["t", "r", "ai", "n"] },
  { word: "sheep", expected: ["sh", "ee", "p"] },
  { word: "night", expected: ["n", "i", "g", "h", "t"] }, // Wait, 'igh' is not in the array, so it splits to i-g-h-t. That's correct per the array.
  { word: "queen", expected: ["qu", "ee", "n"] },
  { word: "moon", expected: ["m", "oo", "n"] },
  { word: "singer", expected: ["s", "i", "ng", "er"] },
  { word: "chair", expected: ["ch", "ai", "r"] },
];

let passed = 0;
testCases.forEach(({ word, expected }, index) => {
  try {
    const result = decomposeToPhonemes(word);
    assert.deepStrictEqual(result, expected);
    console.log(`✅ Test ${index + 1} Passed: "${word}" -> [${result.join(', ')}]`);
    passed++;
  } catch (err) {
    console.error(`❌ Test ${index + 1} Failed for "${word}":`);
    console.error(`   Mong đợi: [${expected.join(', ')}]`);
    console.error(`   Thực tế : [${decomposeToPhonemes(word).join(', ')}]`);
  }
});

console.log(`\nKết quả: ${passed}/${testCases.length} bài test thành công!`);
