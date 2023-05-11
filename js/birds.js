const images = [
  { image: "./images/1bird.jpg", type: "bird", answer: "1" },
  { image: "./images/2birds.jpg", type: "bird", answer: "2" },
  { image: "./images/3birds.jpg", type: "bird", answer: "3" },
  { image: "./images/4birds.jpg", type: "bird", answer: "4" },
  { image: "./images/6birds.jpg", type: "bird", answer: "6" },
  { image: "./images/7birds.jpg", type: "bird", answer: "7" },
  { image: "./images/9birds.jpg", type: "bird", answer: "9" },
  { image: "./images/1.jpg", type: "non-bird" },
  { image: "./images/2.jpg", type: "non-bird" },
  { image: "./images/3.jpg", type: "non-bird" },
  { image: "./images/4.jpg", type: "non-bird" },
  { image: "./images/5.jpg", type: "non-bird" },
  { image: "./images/6.jpg", type: "non-bird" },
  { image: "./images/7.jpg", type: "non-bird" },
  { image: "./images/8.jpg", type: "non-bird" },
  { image: "./images/9.jpg", type: "non-bird" },
];

const birdImages = images.filter((img) => img.type === "bird");
const nonBirdImages = images.filter((img) => img.type === "non-bird");

// randomly select 4 bird images and 5 non-bird images
const selectedImages = [];
while (selectedImages.length < 4) {
  const randomIndex = Math.floor(Math.random() * birdImages.length);
  const randomBirdImage = birdImages[randomIndex];
  if (!selectedImages.includes(randomBirdImage)) {
    selectedImages.push(randomBirdImage);
  }
}

while (selectedImages.length < 9) {
  const randomIndex = Math.floor(Math.random() * nonBirdImages.length);
  const randomNonBirdImage = nonBirdImages[randomIndex];
  if (!selectedImages.includes(randomNonBirdImage)) {
    selectedImages.push(randomNonBirdImage);
  }
}

// shuffle the selectedImages array using the Fisher-Yates shuffle algorithm
for (let i = selectedImages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [selectedImages[i], selectedImages[j]] = [
    selectedImages[j],
    selectedImages[i],
  ];
}

// display images
selectedImages.forEach((img, index) => {
  const imgElement = document.getElementById(`image${index + 1}`);
  imgElement.src = img.image;
  if (img.answer) {
    imgElement.dataset.answer = img.answer;
  }
});

function birdAnswer() {
  let birdAnswer = "";
  selectedImages.forEach((img) => {
    if (img.answer) {
      birdAnswer += img.answer;
    }
  });
  return birdAnswer;
}

const birdsAnswer = birdAnswer();

const btnBirds = document.getElementById("btn-birds");
const birdsInput = document.getElementById("birds-input");

btnBirds.addEventListener("click", function () {
  checkAnswer();
});

birdsInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

function checkAnswer() {
  if (birdsInput.value === birdsAnswer) {
    alert("correct!");
  }
}
