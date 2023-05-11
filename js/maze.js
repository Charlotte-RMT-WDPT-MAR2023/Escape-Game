//maze constant
//each space is 50x50
//maze dimension is 400x400
const mazeArray = 
[
    ["#", " ", "#", "#", "#", "#", "#", "#"],
    ["#", " ", "#", " ", " ", " ", " ", "#"],
    ["#", " ", "#", " ", "#", "#", " ", "#"],
    ["#", " ", "#", " ", " ", "#", " ", "#"],
    ["#", " ", "#", " ", " ", "#", " ", "#"],
    ["#", " ", "#", "#", "#", "#", " ", "#"],
    ["#", " ", " ", " ", " ", " ", " ", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
];


// initial values for player and maze
let speedX = 0;
let speedY = 0;
let playerX = 250;
let playerY = 250;

//player control
document.onkeydown = (event) => {
    switch(event.code){
        case 'ArrowLeft': speedX = speedX - 5;
            break;
        case 'ArrowRight': speedX = speedX + 5;
            break;
        case 'ArrowUp': speedY = speedY - 5;
            break;
        case 'ArrowDown': speedY = speedY + 5;
            break;
    }
}
document.onkeyup = (event) => {
speedX = 0;
speedY = 0;
}


function maze(){
    playerUpdate();
    drawMaze();
    playerWall();
    playerDraw();
    

    
}

//Player
function playerUpdate(){
    if(speedX > 2){speedX = 2;}
    if(speedX < -2){speedX = -2;}
    if(speedY > 2){speedY = 2;}
    if(speedY < -2){speedY = -2;}
    
    playerX = playerX + speedX;
    playerY = playerY + speedY;
}

function playerDraw(){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(playerX, playerY, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function playerWall(){
    if(playerX < 110){playerX = 110;}
    if(playerY > 390){playerY = 390;}
    if(playerX > 390){playerX = 390;}
    if(playerX > 140 && playerX < 150 && playerY < 355){playerX = 140}
    if(playerY < 360 && playerY > 350 && playerX > 140 && playerX < 360){playerY = 360}
    if(playerX < 360 && playerX > 350 && playerY > 140 && playerY < 360){playerX = 360}
    if(playerY > 140 && playerY< 150 && playerX > 240 && playerX < 360){playerY = 140}
    if(playerX < 210 && playerX > 200 && playerY > 90 && playerY < 310){playerX = 210}
    if(playerY > 290 && playerY < 300 && playerX > 190 && playerX < 310){playerY = 290}
    if(playerX > 290 && playerX < 300 && playerY > 190 && playerY < 310){playerX = 290}
    if(playerY < 210 && playerY > 200 && playerX > 240 && playerX < 310){playerY = 210}
    if(playerX > 240 && playerX < 250 && playerY > 140 && playerY < 210){playerX = 240}

    //top most
    if(playerY < 110 && playerX > 140){playerY = 110}
    
    
}

//maze
function drawMaze(){
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(50+0*50, 50+0*50, 50*1, 50*8);
    ctx.rect(50+1*50, 50+7*50, 50*7, 50*1);
    ctx.rect(50+7*50, 50+0*50, 50*1, 50*7);
    ctx.rect(50+2*50, 50+0*50, 50*6, 50*1);
    ctx.rect(50+2*50, 50+1*50, 50*1, 50*5);
    ctx.rect(50+3*50, 50+5*50, 50*3, 50*1);
    ctx.rect(50+5*50, 50+2*50, 50*1, 50*3);
    ctx.rect(50+4*50, 50+2*50, 50*1, 50*1);
    ctx.fill();
}