class blackscreen{
	constructor(color,x,y,width,height){
		this.color = color;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	drawBlackScreen(canvas){
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x,this.y,this.width,this.height);
	}
	
	setColor(color){
		this.color = color;
	}
	
	setPosition(x,y){
		this.x = x;
		this.y = y;
	}
	
	setDimension(width,height){
		this.width = width;
		this.height = height;
	}
}