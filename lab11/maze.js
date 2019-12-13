$(document).ready(function(){
   
    var finish = 0;
    var start = 0;
    $(".boundary").mouseover(function(){
        $(".boundary").addClass( "youlose" );
        finish = 1;
        $( "#status" ).text( "You lost" );
        start = 0;
    });
    
    $("#end").mouseover(function(){
        if(start == 1)
        {
        if(finish == 0){
            alert("You win");
            $( "#status" ).text( "You win" );
            start = 0;
        }
        else{
            alert("You lose");
            $( "#status" ).text( "You lost" );
            start = 0;
        }
    }
    });
    $("#start").mouseover(function(){
        finish = 0;
        $(".boundary").removeClass( "youlose" );
        $( "#status" ).text( "started" );
        start = 1;
    });

    $( "#maze" ).mouseleave(function(){
        if(start == 1){
        alert("You cheating");
        start = 0;
        }   
       
    });
});
