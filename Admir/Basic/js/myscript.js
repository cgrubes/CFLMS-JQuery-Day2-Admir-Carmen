$("img").css({"width":"30%", "height":"30vw"});
$("#result").css({"text-align":"center", "font-size":"5vw"});

$(document).ready(function() {

    $("img").click(function() {
        let content = $(this).attr("alt");
        $("#result").text("This is " + content);
        $(this).addClass("christmas");
    });
});