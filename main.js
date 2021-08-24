var canvas = new fabric.Canvas('myCanvas');
//var x= document.getElementById("myAudio");

get_image = 'cupcake.jpeg';

function new_img(){
    //alert("I am inside img function")   
   fabric.Image.fromURL(get_image, function(Img){
     block_image_object = Img;

      block_image_object.scaleToWidth(900);
       block_image_object.scaleToHeight(700);
       block_image_object.set({
        top:0,
        left:0
       });
       canvas.add(block_image_object);
    }
   )
}