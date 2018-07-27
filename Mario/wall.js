class wall{
	constructor(width,height){
		this.width = width;
		this.height = height;
		this.x = 0;
		this.y = 0;
	}
	
	setPosition(x,y){
		this.x = x;
		this.y = y;
	}
	
	drawWall(canvas){
		canvas.fillStyle = "black";
		canvas.fillRect(this.x,this.y,this.width,this.height);
	}
	
	collisionTop(x,y){
		if(this.y+5<=y){
			return false;
		}
		return true;
	}
	
	collisionBottom(x,y){
		if(this.y+this.height-15>=y){
			return false;
		}
		return true;
	}
	
	collisionLeft(x,y){
		if(this.x+10<=x){
			return false;
		}
		return true;
	}
	
	collisionRight(x,y){
		if(this.x+this.width-15>=x){
			return false;
		}
		return true;
	}
}