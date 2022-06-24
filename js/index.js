let aboutOffset = $("h1") .offset() .top ; //bo3d el about mn el top ad eh

// to back up to home section again 
$(window).scroll(function(){
    let wScroll = $(window) .scrollTop() ;   //el user nzl bl scroll ad eh

if (wScroll > aboutOffset - 50)  //awel madkhol 3la el about  
{
    $("#btnUp") .fadeIn(500) ; 
}  
else
 {
    $("#btnUp") .fadeOut(500) ;

}
}) ;

$("#btnUp").click (function()
{

    $("html,body").animate({scrollTop:0},1000) ; 
})  ;

//loading page
$(document).ready(function(){
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto")
    });
}) ;
