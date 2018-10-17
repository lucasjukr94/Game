var canv = document.getElementById("canvas");
var canvas = canv.getContext("2d");

var width = window.innerWidth;
var height = window.innerHeight;

var div = document.createElement("div");

var i = 0;

$(document).ready(function(){
	setup();
});

function setup(){
	
	canv.focus();
	
	document.getElementById("canvas").width = width;
	document.getElementById("canvas").height = height;
	
	canvas.fillStyle = "black";
	canvas.fillRect(0,0,width,height);
	
	sswitch = true;
	
	div.setAttribute("id","img");
	div.style="width:150px;height:150px;position:absolute;top:150px;left:60px;background-size:cover;";
	div.style.backgroundImage="url(img/charizard.gif)";
	document.body.appendChild(div);
	
	setInterval(function(){ 
		tick();
	}, 1);
}

function tick(){
	i+=1;
	
	canvas.fillStyle = "black";
	canvas.fillRect(0,0,width,height);
	
	canvas.fillStyle = "red";
	canvas.fillRect(0,0,50,50);
	
	div.style.top = i;
}