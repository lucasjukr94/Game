class bola extends entity{
	constructor(x,y){
		super();
		super.setPosition(x,y);
		this.setVelX(1);
		this.setVelY(1);
		this.g = 0.1;
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
		this.y+=this.g;
	}
	
	//Verifica se houve colisão com outra entidade e retorna int indicando o lado colidido
	//1-left,2-right,3-top,4-bottom
	collision(entidade){
		if(this.centerX() <= entidade.x + entidade.width && 
		this.centerY() >= entidade.y && 
		this.centerY() <= entidade.y + entidade.height){
			return 1;
		}
		if(this.centerX() >= entidade.x + entidade.width && 
		this.centerY() >= entidade.y && 
		this.centerY() <= entidade.y + entidade.height){
			return 2;
		}
		if(this.centerY() >= entidade.y + entidade.height && 
		this.centerX() >= entidade.x && 
		this.centerX() <= entidade.x + entidade.width){
			return 3;
		}
		if(this.centerY() <= entidade.y + entidade.height && 
		this.centerX() >= entidade.x && 
		this.centerX() <= entidade.x + entidade.width){
			return 4;
		}
		//console.log(0);
		return 0;
	}
	
	ricochet(entidade){
		switch(this.collision(entidade)){
			case 1://left
				this.x++;
				break;
			case 2://right
				this.x--;
				break;
			case 3://top
				this.y++;
				break;
			case 4://bottom
				this.y--;
				break;
			default:
				this.y-=0.1;
				break;
		}
	}
	
	near(entidade){
		if(this.y < entidade.y + 10 && 
			this.y > entidade.y - 10 &&
			this.x < entidade.x + 10 &&
			this.x > entidade.x - 10){
			return true;
		}else{
			return false;
		}
	}
}