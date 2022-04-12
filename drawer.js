img="";
status="";
objects= [];


function preload(){
img=loadImage('drawer.jpg');
}

function setup(){
canvas=createCanvas(630, 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
image(img, 0, 0, 630, 420);

if(status !=""){
for(i=0; i < objects.length; i++)
{

fill('#FF0000');
percent=floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke('#FF0000');
rect(objects[i].x, objects[i].y, objects[i].width + 20, objects[i].height + 20);
}

}

}



function modelLoaded(){
console.log("model loaded");
status=true;
objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}