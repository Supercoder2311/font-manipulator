leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
     poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log('posenet is intialized!');
}

function draw(){
    background('969A97');
    document.getElementById("noter").innerHTML = " Width and Height of the text will be =" +difference +" px";
    textSize(difference);
    fill('blue');
    text('Ayaansh', 200, 250);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log(" leftWrist ="+ leftWristX +" rightWrist =" +rightWristX +" difference ="+ difference);
    }
}