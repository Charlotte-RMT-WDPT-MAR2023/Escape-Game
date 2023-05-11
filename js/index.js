//prepare constants and initial values

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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


const maze = [
  ["#", " ", "#", "#", "#", "#", "#", "#"],
  ["#", " ", "#", " ", " ", " ", " ", "#"],
  ["#", " ", "#", " ", "#", "#", " ", "#"],
  ["#", " ", "#", " ", " ", "#", " ", "#"],
  ["#", " ", "#", " ", " ", "#", " ", "#"],
  ["#", " ", "#", "#", "#", "#", " ", "#"],
  ["#", " ", " ", " ", " ", " ", " ", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#"],
];



  }