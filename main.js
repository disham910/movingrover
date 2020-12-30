canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;roverheghit=90;
background_image="mars.jpg";
roverimage="rover.png";
roverx=10;
rovery=10;
function add(){
    imgtag=new Image();
    imgtag.onload=uploadbackground;
    imgtag.src=background_image;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=roverimage;
}
function uploadbackground(){
    ctx.drawImage(imgtag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover,roverx,rovery,rover_width,roverheghit);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        
}
if(keypressed=="39"){
    right();
    
}
if(keypressed=="37"){
    left();
    
}  
    if(keypressed=="40"){
    down();
    
}  
   }
function up(){
if(rovery>=0){
    rovery=rovery-10;
    uploadbackground();
    uploadrover();
    
}
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        uploadbackground();
        uploadrover();
        
    }
}
  function left(){
if(roverx>=0){
roverx=roverx-10;
    uploadbackground();
    uploadrover();
    
}
      
  }
function right(){
if(roverx<=700){
    roverx=roverx+10;
    uploadbackground();
    uploadrover(); }
}


























    
    
    
    
    
    
    
    
    
    
    

