// to switch images when click on 
var mainImg =document.getElementById("mainImg");
var smallImg =document.getElementsByClassName("small-img"); 
smallImg[0].onclick =function(){
    mainImg.src = smallImg[0].src;
} 
smallImg[1].onclick =function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick =function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick =function(){
    mainImg.src = smallImg[3].src;
} 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 