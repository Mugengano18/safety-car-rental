// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds

// }
$(document).ready(function(){
    var image =0;
var slides =function(){
    var y = document.getElementsByClassName("ims");

    for(var i=0; i<y.length; i++){
        y[i].style.display = "none";
    }
    if(image>y.length){image =1}
    y[image-1].style.display ="block";
    setTimeout(carousel, 2000);
}
slides();
});