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
		/*
		Esse método funciona(não acontece flickering) apenas em browser, se for em phonegap, não funciona,
		é necessário usar o img.onload = function(){canvas.drawImage(...);};img.src = "...";
		*/
		var img = new Image();
		img.src = "img/matrix.jpg";
		canvas.drawImage(img,this.x,this.y,this.width,this.height);
	}
	
	move(keyDownA,keyDownS,keyDownD,keyDownW){
		if(keyDownA){
			this.x = this.x + 1;
		} 
		if(keyDownS){
			this.y = this.y - 1;
		} 
		if(keyDownD){
			this.x = this.x - 1;
		} 
		if(keyDownW){
			this.y = this.y + 1;
		}
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
