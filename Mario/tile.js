class tile{
	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	setPosition(x,y){
		this.x = x;
		this.y = y;
	}
	
	setDimension(width,height){
		this.width = width;
		this.height = height;
	}
	
	drawTile(canvas){
		canvas.fillStyle = "yellow";
		canvas.fillRect(this.x,this.y,this.width,this.height);
	}
}