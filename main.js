function setup() {
    canvas= createCanvas(550,550);
    canvas.position(560,150);

    video= createCapture(VIDEO);
    video.size(500,500);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background("grey");
}

function modelLoaded() {
    console.log('PoseNet is initialised');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}