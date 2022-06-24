
const btn = document.querySelectorAll('.botn');
console.log(btn);

btn.forEach(function(button){
button.addEventListener("click",function(){
    this.classList.toggle("active");
    
    //to close other buttons 
    if (button.classList.contains('active')){
         btn.forEach(function(button) {
             button.classList.remove('active');
         }) ; //else
         button.classList.toggle('active');
    } 
});
}); 