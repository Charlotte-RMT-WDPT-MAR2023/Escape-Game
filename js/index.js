//prepare constants and initial values

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight * 0.99;
let animation;

//Hiding Screen function
function togglescreen(id, toggle) {
  let element = document.getElementById(id);
  let display = toggle ? "block" : "none";
  element.style.display = display;
}

//Add event listener to the button
window.onload = () => {
  //Start Button
  document.getElementById("btn-start").onclick = () => {
    togglescreen("start-screen", false);
    togglescreen("game-screen", true);
    game();
  };
}

function game(){
animation = requestAnimationFrame(game);
ctx.clearRect(0, 0, canvas.width, canvas.height);
maze();

}