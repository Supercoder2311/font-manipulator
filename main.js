function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function draw(){
    background('#969A97');
}

function modelLoaded(results){
    console.log('posenet is intialized!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}