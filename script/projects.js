$(document).ready(
    function notyet() {
        $("#not-yet").css("height", 
            $("#all").height() - 2*$(".tituler").outerHeight()
        )
    }
)
setInterval(notyet, 1);