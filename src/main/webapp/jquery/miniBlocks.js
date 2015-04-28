$(document).ready(function() {
    $(".blocks").hover(
        function(){  
            $(this).children().css("visibility","visible");        
        },
        function(){
            $(this).children().css("visibility","hidden");
        }
    );
    
    $(".miniBlocks").hover(
        function(){
            $(this).css("background-color","white");
            $(this).css("color","black");
        },
        function(){
            $(this).css("background-color","black");
            $(this).css("color","white");
        }
    );
    $(".miniBlocks").click(function(){
        console.log("Text: " + $(this).text());
        $(this).parent().html($(this).text());
    });
})