$(function(){

    const listItems = $("li");

    listItems.each(function(index){
        if (index % 2 !==0){
            $(this).css("font-style", "Italic");
        }
    });

    // $("li").css("font-style", "Italic");

    listItems.first().css("font-size", "larger")

    listItems.last().css("text-decoration", "underline dotted");

    $("button").on('click', function() {
        // $("main").children().css("font-family", "san-serif");
        $("li").children().toggleClass("sanSerif");
        $("ul").last().children().children().css("text-decoration", "underline dotted");
    });

    $("h2").hover(function() {
        $(this).next().slideToggle();
    });

    $("header p").hover(function(){
        $(this).parent().toggleClass("darkMode");
    });

});