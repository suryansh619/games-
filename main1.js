var canvasHeight=500;
var canvasWidth=800;

var stick={
		x:750,
		y:0,
		xVel:-7,
		direction:1,
		color:"#56f442",
		width:25,
		height:250, 
		draw: function()
		{
			fill(this.color);
			image(image_pipe,this.x,this.y,this.width,this.height);
		},
		update: function()
		{
			this.x+=this.xVel;
			if(this.x<0)
			{
				this.height=getRandomIntInclusive(50,250);
				if(this.height<100)
					this.height=250;
				this.x=785;
				
			}
		}
};
var stick1={
		x:750,
		y:350,
		xVel:-7,
		direction:1,
		color:"#56f442",
		width:25,
		height:150, 
		draw: function()
		{
			fill(this.color);
			image(image_pipe,this.x,this.y,this.width,this.height);
		},
		update: function()
		{
			this.x+=this.xVel;
			if(this.x<0)
			{
				this.y=getRandomIntInclusive(stick.height+80,400);;
				this.height=canvasHeight-this.y;
				this.x=785;
				
			}
		}
};
var ball={
	x:150,
	y:300,
	yVel:4,
	color:"#e8e820",
	width:40,
	height:40,
//	height:15,
	draw: function()
	{
		fill(this.color);
		image(image_bird,this.x,this.y,this.width,this.height);
	},
	update: function()
		{
			this.y+=this.yVel;
		}
}
var image_bird;
var image_pipe;
function preload()
{
	image_bird = loadImage("index.png")
	image_pipe = loadImage("index11.png")
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function collision(s, s1, b) {
	if(b.y>canvasHeight-b.width)
			{
				return 1;
			}
	else if(b.y<b.width)
			{
				return 1;
			}
	else
	return (b.y>s1.y||b.y<s.height)&&b.x>=s.x&&b.x<=s.x+s.width;
}
function setup()
{
	createCanvas(canvasWidth,canvasHeight);
	background(45);
}
function draw()
{
	//clear();
	if(keyIsDown(32))
	{
		ball.y+=-15;
	}
	background(45);
	stick.draw();
	stick1.draw();
	stick1.update();
	stick.update();
	ball.draw();
	ball.update();
	if(collision(stick,stick1,ball))
	{
		stick.xVel=0;
		stick1.xVel=0;
		ball.yVel=0;
	}
}