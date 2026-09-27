let x,y,d;
let colorPalette= ['#F2A955','#6B8F9D','#736B62','#B38450'];
let numCircles;
let spacing;
function setup(){
    createCanvas(windowWidth, windowHeight);

    x = width/2;
    y = height/2;
    d = width/2;
    numCircles=4;
    spacing = d/numCircles;


}

function draw() {
    background(0);
    d = width/2;
for(i = 0; i < numCircles; i++)
{
 fill (colorPalette[i]);
 circle(x,y,d);
 d = d - spacing;
}

}