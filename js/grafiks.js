$(".calendar").on("click", ".calendar__entry__set", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
});