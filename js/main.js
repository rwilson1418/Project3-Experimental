$('#button').click(function () {
  $('html,body').animate({
    scrollTop: $(document).height()
  },35000);
})

$('#button').click(function pictureChange() {
  document.getElementById('newbutton').src="img/sub2.png";
})

$(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('.fish1')) {
        var els = $('.fish1 img'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('animatefish1');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
    if(elementScrolled('.shark')) {
        var els = $('.shark img'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('animateshark');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
    if(elementScrolled('.fish2')) {
        var els = $('.fish2 img'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('animatefish2');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
    if(elementScrolled('.anglr')) {
        var els = $('.anglr img'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('animateanglr');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
});
