// always use $(function() {
// });
// # is for id
// . is for class
// h1 make it red
// document.getElementsByTagName("h1") targets all elements ex h1,div,id
$(function(){
    let myName = 'Danny';
    $("h1").addClass("text-danger"); //addClass means to do something
    $("#myFavoriteDiv").append(` 
    <p>Underneath the List ${myName}</p>

    `); // append add stuff
    // $("ul").children().last().prev().addClass("text-warning");
    $("ul li:nth-child(4)").addClass("text-warning");
    // THIS IS A CLASS . .on("click") is a event listener
    $(".fs-4").click(function(){
        $(this).css("visibility", "hidden");
        // $(".fs-4").toggleClass("fs.4"); // this will toggle both fs-4
    });
    // This target the second ul
    $("ul").last().children().addClass("text-info")
    $("ul li:nth-child(1)").click(function (){
        alert("you click first child!");
    });
    // This is for the button
    $('button').on('click', function (){
        $("h1").text("lorem");
    });
});

// same as  $("#myFavoriteDiv").append(`<h1>Underneath the List ${myName}</h1>
// document.getElementById("#myFavoriteDiv")
