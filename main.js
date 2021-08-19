function preload(){

}
function setup(){
    canvas = createCanvas(650,420);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 210, 100, 240,200);

    fill("#eeff6e");
    stroke("#f8ff9c");
    triangle(35, 75, 65, 20, 90, 75);

    fill("#fc6060");
    stroke("#fc6060");
    // Draw a circle at location (30, 30) with a diameter of 20.
    circle(40, 110, 50);

    fill("#4d64ff");
    stroke("#4d64ff");
    // Draw a square at location (30, 20) with a side size of 55.
   square(75, 90, 45);

}
function snap(){
    save('hello.png');
}