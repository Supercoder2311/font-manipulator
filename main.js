noseX =0;
noseY =0;
difference =0;
leftWristX =0;
rightWristX =0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML = " Width and Height of a square will be =" +difference +" px";
    fill('red');
    stroke('blue');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('posenet is intialized!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log(" noseX = " +noseX +" noseY =" +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log(" leftWrist ="+ leftWristX +" rightWrist =" +rightWristX +" difference ="+ difference);
    }
}