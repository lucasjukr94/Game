class bola{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.velX = 1;
		this.velY = 1;
	}
	
	setWidth(width){
		this.width = width;
	}
	
	setHeight(height){
		this.height = height;
	}
	
	setPosition(x,y){
		this.x = x;
		this.y = y;
	}
	
	setVelX(velX){
		this.velX = velX;
	}
	
	setVelY(velY){
		this.velY = velY;
	}
	
	drawBola(canvas){
		canvas.fillStyle = "#FF0000";
		canvas.fillRect(this.x,this.y,this.width,this.height);
	}
	
	move(keyDownA,keyDownS,keyDownD,keyDownW){
		if(keyDownA){
			this.x = this.x - this.velX;
		} 
		if(keyDownS){
			this.y = this.y + this.velY;
		} 
		if(keyDownD){
			this.x = this.x + this.velX;
		} 
		if(keyDownW){
			this.y = this.y - this.velY;
		}
	}
	
	gravity(){
		this.y+=0.1;
	}
}