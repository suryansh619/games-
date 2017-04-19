var canvasWidth=600;
var canvasHeight=600;

var egg={
	x:300,
	y:20,
	yVel:0,
	color:"#f4ee42",
	width:20,
	draw: function(){
		fill(this.color);
		ellipse(this.x,this.y,this.width);
	},
	update:function(){
		this.y += this.yVel;
		if(this.y>=canvasHeight-bucket.height)
		{
			this.y=20;
			this.yVel=0;
		}
	},

};
var bucket={
	x:260,
	y:500,
	xVel:5,
	direction:0,
	width:80,
	height:40,
	color:"#424bf4",

	draw: function(){
		fill(this.color);
		rect(this.x,this.y,this.width,this.height);
	},
	update: function()
	{
	this.x+=this.xVel;
	if(this.x>canvasWidth-this.width||this.x<0)
		{
			this.xVel=-1*this.xVel;
		}
	}
}
function collision(a, b) {
	return a.y + a.width > b.y && a.y < b.y + b.height && a.x + a.width > b.x && a.x < b.x + b.width;
}
function setup()
{
	createCanvas(canvasWidth,canvasHeight);
	background(45);
}

function draw(){
	background(45);
	egg.draw();
	bucket.draw();
	bucket.update();
	if(keyIsDown(32)){
		egg.yVel=5;
	}
	egg.update();
	if(collision(egg,bucket))
	{
		egg.y=20;
		egg.yVel=0;
	}
}