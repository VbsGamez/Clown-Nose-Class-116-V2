nosex=0;
nosey=0;
function preload()
{
   img = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup()
{
   canvas=createCanvas(300,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
if(results.length>0)
{
   console.log(results);
   nosex=results[0].pose.nose.x;
   nosey=results[0].pose.nose.y;
   console.log("Nose X = "+nosex);
   console.log("Nose Y = "+nosey);
}
}
function modelLoaded()
{
   console.log("PoseNet is Initialized...");
}
function draw()
{
   image(video,0,0,300,300);
 //  fill(255,0,0);
 //  stroke(255,0,0);
 //  circle(nosex,nosey,20);
 image(img,nosex-15,nosey-15,30,30);
}
function take_snapshot()
{
  save("australaipithecus.png")
}