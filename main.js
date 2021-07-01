noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(500 ,500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function draw(){
    background('#fc5858');
    fill(3, 148, 252);
    stroke('#0400ff');
    square(noseX ,noseY, difference);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;   
        console.log("Nose x- "+noseX + "  Nose y- "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("LeftWrist x- "+leftWristX + "  rightWrist x- " + rightWristX);
        difference=leftWristX - rightWristX;
        console.log("size of the square- "+difference);
    }
}