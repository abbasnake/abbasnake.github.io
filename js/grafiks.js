
$(".calendar").on("click", ".calendar__entry--remove", function(){
    $(this).parent().parent().fadeOut(500, function(){
        $(this).remove();
    })
});

$(".calendar").on("click", ".calendar--add", function(){
    $(".calendar").append(
        "<div class='calendar__date row'><div class='calendar__entry col-md-1'>01</div><div class='calendar__entry col-md-1<div class='calendar__entry col-md-1'>I</div><div class='calendar__entry col-md-2'>Klavigo</div><div class='calendar__entry col-md-2'>JZ</div><div class='calendar__entry col-md-1'><div class='row'><div class='calendar__entry__workers col-md-6'>R</div><div class='calendar__entry__workers col-md-6'>N</div></div></div><div class='calendar__entry col-md-1'>16:00-21:00</div><div class='calendar__entry col-md-2'>paņemt defibrilatoru</div><div class='calendar__entry col-md-1'><button type='button' class='calendar__entry--remove'>X</button></div></div>"
        );

});