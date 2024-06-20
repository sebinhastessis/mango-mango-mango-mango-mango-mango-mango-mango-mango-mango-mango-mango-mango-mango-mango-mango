var h10 = 0;
var h0 = 0;
function preload() {
  var h11 = loadImage("1.gif");
}

function setup() {
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet = ml5.poseNet(video,h12);
poseNet.on("pose",h13);
}
function h12(){
    console.log("gremio")
}

function h13(iooiooi){
    if(iooiooi.length>0){
        console.log(iooiooi);
        h10 = iooiooi[0].pose.rightEye.x;
        h0 = iooiooi[0].pose.rightEye.y;   
    }
}



function draw() {
image(video, 0, 0, 300, 300);
image(h11,h10,h0,30,30)
}