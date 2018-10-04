$(document).ready(function(){
    var container = $(".container--img");
    var timer;
    
    function startInterval(){
    timer = setInterval(function(){ 
        var currentImg = $(".active");
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass("active");
            nextImg.addClass("active");
        }else{
            currentImg.removeClass("active");
            container.children(".base").addClass("active");
        }
    }, 3000);
    }
    
    startInterval();
    
    $(".next").on("click", function(){
        clearInterval(timer);
        var currentImg = $(".active");
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass("active");
            nextImg.addClass("active");
        }else{
            currentImg.removeClass("active");
            container.children(".base").addClass("active");
        }
        startInterval();
    })
    
    $(".prev").on("click", function(){
        clearInterval(timer);
        var currentImg = $(".active");
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass("active");
            prevImg.addClass("active");
        }
        else{
            currentImg.removeClass("active");
            container.children(".last").addClass("active");
        }
        startInterval();
})
})