var canv = document.getElementById("canvas");
var canvas = canv.getContext("2d");

var keyDownA=false,keyDownS=false,keyDownD=false,keyDownW=false;
var ball;
var tijolos = [];
var parede;
var screen;

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
$(document).mousemove(function(ev){
	document.getElementById("mousecoord").innerHTML = "X:"+ev.pageX+",Y:"+ev.pageY;
});

function setup(){
	canv.focus();
	ball = new bola(50,50);
	ball.setDimension(10,10);
	ball.setPosition(250,200);
	parede = new wall(800,800);
	screen = new blackscreen("black",0,0,800,800);
	for(var j=0;j<80;j++){
		var tijolo = [];
		for(var i=0;i<80;i++){
			var t = new tile(0+10*i,0+10*j,10,10);
			if(j==40){
				t.setFill(true);
				if(i==25){
					t.setFill(false);
				}
			}
			if(j==50){
				if(i%3!=0){
					t.setFill(true);
				}
			}
			if(j==53){
				if(i%7!=0){
					t.setFill(true);
				}
			}
			tijolo.push(t);
		}
		tijolos.push(tijolo);
	}
	setInterval(function(){ tick() }, 1);
	tick();
}

function tick(){
	screen.drawBlackScreen(canvas);
	parede.drawWall(canvas);
	var colLeft = !parede.collisionLeft(ball.x,ball.y);
	var colRight = !parede.collisionRight(ball.x,ball.y);
	var colTop = !parede.collisionTop(ball.x,ball.y);
	var colBottom = !parede.collisionBottom(ball.x,ball.y);
	
	for(var j=0;j<80;j++){
		for(var i=0;i<80;i++){
			if(tijolos[j][i].filled && ball.near(tijolos[j][i],10)){
				ball.ricochet(tijolos[j][i]);
			}
			tijolos[j][i].drawTile(canvas);
		}
	}
	
	if(colLeft && colRight && colTop && colBottom){
		ball.move(keyDownA,keyDownS,keyDownD,keyDownW);
		parede.move(keyDownA,keyDownS,keyDownD,keyDownW);
		for(var j=0;j<80;j++){
			for(var i=0;i<80;i++){
				tijolos[j][i].move(keyDownA,keyDownS,keyDownD,keyDownW);
			}
		}

	}else{
		if(colLeft){
			ball.x--;
			parede.x++;
			for(var j=0;j<80;j++){
				for(var i=0;i<80;i++){
					tijolos[j][i].x+=0.5;
				}
			}
		}
		if(colRight){
			ball.x++;
			parede.x--;
			for(var j=0;j<80;j++){
				for(var i=0;i<80;i++){
					tijolos[j][i].x-=0.5;
				}
			}
		}
		if(colTop){
			ball.y--;
			parede.y++;
			for(var j=0;j<80;j++){
				for(var i=0;i<80;i++){
					tijolos[j][i].y+=0.5;
				}
			}
		}
		if(colBottom){
			ball.y++;
			parede.y--;
			for(var j=0;j<80;j++){
				for(var i=0;i<80;i++){
					tijolos[j][i].y-=0.5;
				}
			}
		}
	}
	
	ball.gravity();
	ball.drawBola(canvas);
}