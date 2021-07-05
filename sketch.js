var canvas;
var music;
var surface;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(10,750);
    surface2 = createSprite(10,760);
    surface3 = createSprite(10,720);
    surface4 = createSprite(10,710);



    //create box sprite and give velocity
box = createSprite(random(20,750));
box.setVelocity(random(-5, 5), random(-5, 5));


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.color = new Color (Red); }
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.color = new Color (green);}
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
         box.color = new Color (blue);}
     if(surface1.isTouching(box)&& box.bounceOff(surface1)){
         box.color = new Color (yellow);}
                        
}
