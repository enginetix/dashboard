// Make images draggable.
$(".item").draggable({


    drag: function( event, ui ) {
 
    // Keep the left edge of the element
    // at least 100 pixels from the container
    if(ui.position.top<60)
        ui.position.top = 60;
    if(ui.position.left<10)
        ui.position.left = 10

    //ui.position.left = Math.min( 100, ui.position.left );
    //ui.position.top = Math.min( 100, ui.position.top );

  }
    /*
    //Revert if at wrong final position
    revert: function(event, ui){
        var Finalpos = $(this).position();
        if(Finalpos.left <0 || Finalpos.top <60)
            return true;
        else
            return false;
    }

    // Find original position of dragged image.
    /*start: function(event, ui) {

        // Show start dragged position of image.
        var Startpos = $(this).position();
        $("div#start").text("START: \nLeft: "+ Startpos.left + "\nTop: " + Startpos.top);
    },

    // Find position where image is dropped.
    stop: function(event, ui) {

        // Show dropped position.
        var Stoppos = $(this).position();
        $("div#stop").text("STOP: \nLeft: "+ Stoppos.left + "\nTop: " + Stoppos.top);
    }*/

});

$( ".item" ).draggable( "option", "opacity", 0.35 );