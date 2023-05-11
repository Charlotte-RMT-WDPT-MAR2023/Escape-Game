const poems = [
  {
    poem: `Oftentimes we seek for something more,<br> 
      Not quite sure what we're looking for. <br> 
      Every heart yearns to be complete.`,
    answer: "1",
  },
  {
    poem: `Tortured brushstrokes, colors blending,  <br> 
  Hearts entwined, a passion unending, <br> 
  Revealing beauty in each stroke, <br> 
  Each creation, a love bespoke, <br> 
  Elevating emotions, a work of art.`,
    answer: "3",
  },
  {
    poem: `Fragile strokes on canvas, paint whispers secrets untold, <br> 
  Open hearts pour out their emotions, stories to be unfold, <br> 
  Unbridled passion ignites, ignites the creative soul, <br> 
  Romantic hues blend seamlessly, a masterpiece whole.`,
    answer: "4",
  },
  {
    poem: `Fingers intertwined, a canvas before us, <br> 
  Ink strokes and watercolor splashes merge, <br> 
  Vibrant colors, emotions they chorus, <br> 
  Every brushstroke a brush with the divine.`,
    answer: "5",
  },
  {
    poem: `Sculpting feelings in clay, <br> 
  Expressing emotions in every way, <br> 
  Vibrant colors paint the heart, <br> 
  Enveloping love in every art, <br> 
  Nurturing passions like a seed.`,
    answer: "7",
  },
  {
    poem: `Nurturing feelings, blossoming in art, <br> 
  Intense passions fueling every part, <br> 
  New depths of emotions we explore, <br> 
  Endless expressions to adore.`,
    answer: "9",
  },
];

console.log(poems);

// declare random poems
const randomPoem1 = poems[Math.floor(Math.random() * poems.length)];
poems.splice(poems.indexOf(randomPoem1), 1);
const randomPoem2 = poems[Math.floor(Math.random() * poems.length)];
poems.splice(poems.indexOf(randomPoem2), 1);
const randomPoem3 = poems[Math.floor(Math.random() * poems.length)];

// declare questions and answers
const question1 = randomPoem1.poem;
const question2 = randomPoem2.poem;
const question3 = randomPoem3.poem;
const answer1 = randomPoem1.answer;
const answer2 = randomPoem2.answer;
const answer3 = randomPoem3.answer;

const correctAnswer = answer1 + answer2 + answer3;

console.log(correctAnswer);

const pCanvas = document.getElementById("poem-canvas");
const pCtx = pCanvas.getContext("2d");
const poemQuestion = document.getElementById("poem-question");
const poemInput = document.getElementById("poem-input");

poemQuestion.innerHTML = `${question1}<br><br> ${question2}<br><br> ${question3}`;

const btnPoem = document.getElementById("btn-poem");

btnPoem.addEventListener("click", function () {
  checkAnswer();
});

poemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

function checkAnswer() {
  if (poemInput.value === correctAnswer) {
    alert("correct!");
  }
}
