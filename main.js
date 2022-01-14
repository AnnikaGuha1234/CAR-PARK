canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_x=10;
car_y=10;
car_image="car";
Background_image="park.gif.crdownload";
car_width=90;
car_height=100;
function add(){
    Background_imgTag = new Image();
    Background_imgTag.onload= uploadBackground();
    Background_imgTag.src=Background_image;

    car_imgtag= new Image();
    car_imgtag.onload=uploadcar();
    car_imgtag.src=car_image;

}
function uploadBackground(){
    ctx.drawImage(Background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar(){
ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode
    console.log("KeyPressed");
if (keyPressed == 38)
{
    up();
    console.log("up");
}
if (keyPressed==40){
down();
console.log("down");
}
if (keyPressed==37){
left();
console.log("left");
}
if (keyPressed==39){
right();
console.log("right");
}
}
function up(){

    if(car_y >0){
        car_y -=10;
        console.log("when up arrow key is pressed x = " + car_x + car_y);
uploadBackground();
    uploadcar();

    }
}
function down(){
    if(car_y <=500){
        car_y +=10;
        console.log("when down arr0w key is pressed  x =" + car_x + "|y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}
function left(){
    if(car_x >=0){
        car_x -=10;
        console.log("when left arrow key is pressed  x =" + car_x + "|y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}
function right(){
    if(car_x <=700){
        car_x +=10;
        console.log("when right arrow key is pressed  x =" + car_x + "|y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}