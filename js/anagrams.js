const anagrams = [
  { answer: "elephant", question: "help nate" },
  { answer: "hedgehog", question: "egg he hod" },
  { answer: "kangaroo", question: "an oak rog" },
  { answer: "reindeer", question: "der ernie" },
  { answer: "tortoise", question: "ire toots" },
  { answer: "antelope", question: "aleen pot" },
  { answer: "flamingo", question: "golf main" },
];

const randomAnagram = anagrams[Math.floor(Math.random() * anagrams.length)];
const question = randomAnagram.question;
const answer = randomAnagram.answer;

const aCanvas = document.getElementById("anagram-canvas");
const aCtx = canvas.getContext("2d");
aCtx.canvas.width = window.innerWidth;
aCtx.canvas.height = window.innerHeight * 0.99;
const anagramQuestion = document.getElementById("anagram-question");
const anagramInput = document.getElementById("anagram-input");

anagramQuestion.innerHTML = question;

const btnAnagram = document.getElementById("btn-anagram");

btnAnagram.addEventListener("click", function () {
  checkAnswer();
});

anagramInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

function checkAnswer() {
  if (anagramInput.value === answer) {
    alert("correct!");
  }
}
