$(function(){

    $("#clickMe").on('click', function(){
        alert('yoo');
    });
    $("#create-an-element").on('click', function(){
        $(this).after("<button class='will-this-work'>Click Me</button>")
    });
    // this won't work because we are trying to register an event handler with an element that doesn't exist yet.
    // $(".will-this-work").on('click', function(){
    //     alert(":( this wont work");
    // });
    // delegated event
    $("#dynamic-content").on('click', '.will-this-work', function(){
        alert("oooohhhh yeaaaah");
    })
    $(".box").hover(function(){
        $(this).addClass("hotpink");
    },
      function(){
        $(this).removeClass("hotpink");
       // $(this).css('background-color', 'unset')
      });
    $(document).keydown(function(){
        alert("you just pressed a key down");
        console.log(e.originalEvent.key);
    })
});

let i = 0;
while (i < 10) { // shows 0, then 1, then 2
    i++;
    console.log(i)
}