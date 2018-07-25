var canv = document.getElementById("canvas");
var canvas = canv.getContext("2d");

class bola{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	
	drawBola(){
		paint(this);
	}
}

var ball;

$(document).ready(function(){
	setup();
});

var keyDownA=false,keyDownS=false,keyDownD=false,keyDownW=false;
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
	setInterval(function(){ tick() }, 1);
	tick();
}

function tick(){
	if(keyDownA){
		ball.x--;
	} 
	if(keyDownS){
		ball.y++;
	} 
	if(keyDownD){
		ball.x++;
	} 
	if(keyDownW){
		ball.y--;
	}
	
	ball.drawBola();
}

function paint(obj){
	canvas.fillStyle = "white";
	canvas.fillRect(0,0,1000,1000);
	canvas.fillStyle = "#FF0000";
	canvas.fillRect(obj.x,obj.y,10,10);
}