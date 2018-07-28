class entity{
	constructor(){
		
	}
	
	setPosition(x,y){
		this.x = x;
		this.y = y;
	}
	
	setDimension(width,height){
		this.width = width;
		this.height = height;
	}
	
	getX(){
		return this.x;
	}
	
	getY(){
		return this.y;
	}
	
	getWidth(){
		return this.width;
	}
	
	getHeight(){
		return this.height;
	}
	
	centerX(){
		return (this.x + this.width/2);
	}
	
	centerY(){
		return (this.y + this.height/2);
	}
}