$(document).ready(function() {

    $("body").on("mouseenter",".blocks",function(){
        $(this).children().css("visibility","visible");
    });
    
    $("body").on("mouseleave",".blocks",function(){
        $(this).children().css("visibility","hidden");
    });
    
    $("body").on("click",".changedBlock",function(){
        $(this).removeClass("changedBlock").addClass("blocks");
        $(this).html("<div class= 'miniBlocks'>1</div>"+
                    "<div class= 'miniBlocks'>2</div>"+
                    "<div class= 'miniBlocks'>3</div>"+
                    "<br>"+
                    "<div class= 'miniBlocks'>4</div>"+
                    "<div class= 'miniBlocks'>5</div>"+
                    "<div class= 'miniBlocks'>6</div>"+
                    "<br>"+
                    "<div class= 'miniBlocks'>7</div>"+
                    "<div class= 'miniBlocks'>8</div>"+
                    "<div class= 'miniBlocks'>9</div>"); 
        $(this).children().css("visibility","visible");
    });
        

    
    
    $("body").on("mouseenter",".miniBlocks",function(){
        $(this).css("background-color","black");
        $(this).css("color","white");
    });
    
    $("body").on("mouseleave",".miniBlocks",function(){
        $(this).css("background-color","");
        $(this).css("color","black");
    });
    
    $("body").on("click",".miniBlocks",function(){
        $(this).parent().removeClass("blocks").addClass("changedBlock");
        $(this).parent().html($(this).text());
    });
})