img ="";
Status = "";
objects = [];

function setup()
{

   canvas = createCanvas(600 , 400);
   canvas.center();

   objectidentifier = ml5.objectDetector('cocossd' , modelLoaded );
   document.getElementById("status").innerHTML = "Status : Detecting object";

}

function preload()
{

    img = loadImage("book.jpg");

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

   if(Status != "")
   {

      for (i = 0; i < objects.length; i++)
      {

         document.getElementById("status").innerHTML = "Status: Object Detected";

         fill("#FF0000");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y);
         noFill();
         stroke("#FF0000");
         rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height+50);

      }

   }
}

function gotresult(error , results)
{

 if(error)
 {

   console.log(error);

 }

 console.log(results);
 objects = results;

}