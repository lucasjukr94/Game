class tile extends entity{
	constructor(x,y,width,height){
		super();
		super.setPosition(x,y);
		super.setDimension(width,height);
		this.filled = false;
	}
	
	setFill(fill){
		this.filled = fill;
	}
	
	move(keyDownA,keyDownS,keyDownD,keyDownW){
		if(keyDownA){
			this.x = this.x + 0.5;
		} 
		if(keyDownS){
			this.y = this.y - 0.5;
		} 
		if(keyDownD){
			this.x = this.x - 0.5;
		} 
		if(keyDownW){
			this.y = this.y + 0.5;
		}
	}
	
	collisionTop(x,y){
		if(this.y<=y){
			return false;
		}
		return true;
	}
	
	collisionBottom(x,y){
		if(this.y+this.height>=y){
			return false;
		}
		return true;
	}
	
	collisionLeft(x,y){
		if(this.x<=x){
			return false;
		}
		return true;
	}
	
	collisionRight(x,y){
		if(this.x+this.width>=x){
			return false;
		}
		return true;
	}
	
	drawTile(canvas){
		if(this.filled){
			canvas.fillStyle="yellow";
			canvas.fillRect(this.x,this.y,this.width,this.height);
		}else{
			canvas.strokeStyle="green";
			canvas.strokeRect(this.x,this.y,this.width,this.height);
		}
	}
}