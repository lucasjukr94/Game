var canv = document.getElementById("canvas");
var canvas = canv.getContext("2d");

var keyDownA=false,keyDownS=false,keyDownD=false,keyDownW=false;
var ball;
var parede;

$(document).ready(function(){
	setup();
});

$(document).keydown(function(ev){
	switch(String.fromCharCode(ev.which)){
		case 'A':
			keyDownA = true;
			break;
		case 'S':
			keyDownS = true;
			break;
		case 'D':
			keyDownD = true;
			break;
		case 'W':
			keyDownW = true;
			break;
	}
});
$(document).keyup(function(ev){
	switch(String.fromCharCode(ev.which)){
		case 'A':
			keyDownA = false;
			break;
		case 'S':
			keyDownS = false;
			break;
		case 'D':
			keyDownD = false;
			break;
		case 'W':
			keyDownW = false;
			break;
	}
});

function setup(){
	canv.focus();
	ball = new bola(50,50);
	ball.setWidth(10)
	ball.setHeight(10);
	ball.setPosition(250,250);
	parede = new wall(500,500);
	parede.setPosition(100,100);
	setInterval(function(){ tick() }, 1);
	tick();
}

function tick(){
	parede.drawWall(canvas);
	var colLeft = !parede.collisionLeft(ball.x,ball.y);
	var colRight = !parede.collisionRight(ball.x,ball.y);
	var colTop = !parede.collisionTop(ball.x,ball.y);
	var colBottom = !parede.collisionBottom(ball.x,ball.y);
	
	if(colLeft && colRight && colTop && colBottom){
		ball.move(keyDownA,keyDownS,keyDownD,keyDownW);
	}else{
		if(colLeft){
			ball.x--;
		}
		if(colRight){
			ball.x++;
		}
		if(colTop){
			ball.y--;
		}
		if(colBottom){
			ball.y++;
		}
	}
	
	ball.gravity();
	ball.drawBola(canvas);
}