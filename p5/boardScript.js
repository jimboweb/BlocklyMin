let shipImage, ship;

function preload(){
    shipImage = loadAnimation("img/mover.svg");
}

function setup(){
    let canvas = createCanvas(600,300);
    canvas.parent('board');
    ship=createSprite(300,150);
    ship.addAnimation("shipImage",shipImage);
    ship.scale= 0.2;
    frameRate(5);
    noLoop();
}

function draw(){
    background(255,255,255);
    drawSprites();
}



function moveForward(sprite){
    let dir = ship.rotation* (Math.PI / 180);
    let deltaX = Math.cos(dir)*5;
    let deltaY = Math.sin(dir)*5;
    let newX = ship.position.x + deltaX;
    let newY = ship.position.y + deltaY;
    ship.position.x=newX;
    ship.position.y=newY;
    redraw();
}

function moveBackward(sprite){
    let dir = ship.rotation* (Math.PI / 180);
    let deltaX = Math.cos(dir)*5;
    let deltaY = Math.sin(dir)*5;
    let newX = ship.position.x - deltaX;
    let newY = ship.position.y - deltaY;
    ship.position.x=newX;
    ship.position.y=newY;
    redraw();
}

function turnLeft(sprite){
    let newDir=ship.rotation-90;
    ship.rotation=newDir;
    redraw();
}

function turnRight(sprite){
    let newDir=ship.rotation+90;
    ship.rotation=newDir;
    redraw();
}


