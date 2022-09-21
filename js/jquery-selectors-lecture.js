// Different ways to do this.
$(function(){
    const $refToLibrary = $("#library");
    // refToLibrary.text("jQuery makes life easier");
    let li3text = $refToLibrary.text();
    $refToLibrary.text(li3text + " makes life easier");

    // class selector and css method to alter styles
    // single declaration syntax
    // $(".framework").css('border', '1px solid black');
    // multiple declaration syntax
    $(".framework").css({
            'border': '1px solid black',
            'width': 'fit-content'
    });
    // type list with chained methods
    // type list with chained methods
    $("p, li").text("I've taken over.").css("color", "hotpink");
});
// $(function(){
//     $("#library").text("jQuery makes life easier");
// });
