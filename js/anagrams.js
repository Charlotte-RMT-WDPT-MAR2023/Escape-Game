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
  if (anagramInput.value.toLowerCase() === answer.toLowerCase()) {
    alert("correct!");
  }
}


//should match no matter the case, e.g Elephant and elephant
