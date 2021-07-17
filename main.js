function setup(){
    canvas=createCanvas(700,700)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()}

function draw(){
    image(video,100,100,500,500)
    fill(0,0,255)
    rect(100,100,500,20)
    rect(100,100,20,500)
    rect(100,600,500,20)
    rect(600,100,20,520)
    fill(255,255,0)  
    circle(100,100,50)
    circle(600,610,50)
    ellipse(605,105,50)
    ellipse(105,605,50)
}