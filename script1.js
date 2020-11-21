let words = [
  {
    word: "apple",
    result: "사과",
    count: 0
  },
  {
    word: "cloud",
    result: "구름",
    count: 0
  },
  {
    word: "happy",
    result: "행복한",
    count: 0
  }
];

let index = 0;
let isResult = false;

let displayWord = () => {
  document.getElementById("eword").innerText = words[index].word;
  document.getElementById("count").innerText = words[index].count;
};

let nextWord = () => {
  index++;
  if (index >= words.length) index = 0;
  displayWord();
};
let onload = () => {
  displayWord();
};

let clickO = () => {
  words[index].count++;
  nextWord();
};

let clickX = () => {
  words[index].count--;
  nextWord();
};

let clickResult = () => {
  document.getElementById("eword").innerText = isResult
    ? words[index].word
    : words[index].result;
  isResult = !isResult;
};
