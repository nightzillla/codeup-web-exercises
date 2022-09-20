// $(document).ready(function(){
//     $("h3").click(function(){  // to call jquery type "jQuery" || "$" shorthand for jQuery
//         $(this).next().slideToggle(500);
//     });
// });

function init() {
    $("h3").click(function(){  // to call jquery type "jQuery" || "$" shorthand for jQuery
        $(this).next().slideToggle(500);
    });
}

window.onload = init;
