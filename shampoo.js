img ="";
Status = "";

function setup()
{

   canvas = createCanvas(640 , 420);
   canvas.center();

   objectidentifier = ml5.objectDetector('cocossd' , modelLoaded );
   document.getElementById("status").innerHTML = "Status : Detecting object";

}

function preload()
{

    img = loadImage("shampoo.jpg");

}

function modelLoaded()  
{
    
    console.log("Model Loaded!!!");
    Status = true;
    objectidentifier.detect(img , gotresult);

}

function back()
{

    window.location.href = "index.html";

}

function draw()
{

   image(img,0,0,640,420);
}

function gotresult(error , results)
{

 if(error)
 {

   console.log(error);

 }

 console.log(results);

}