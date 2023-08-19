braco1=0;
braco2=0;
diferenca=0;
function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(300, 300);
    canvas=createCanvas(1500, 650);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("black");
    textSize(diferenca);
    fill("#FF0000")
    text("Bernardo", 150, 500);
}
function modelLoaded(){
    console.log("modelLoaded");
    
}
function gotPoses(results){
console.log(results);
if(results.length>0){
    braco1=results[0].pose.leftWrist.x;
    braco2=results[0].pose.rightWrist.x;
    diferenca=Math.floor(braco1-braco2);
}
}
