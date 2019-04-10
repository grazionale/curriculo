function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}


// Open mobile menu

function open_menu(){
    document.getElementsByTagName('header')[0].classList.add("active");
    document.getElementsByTagName('body')[0].classList.add("active");
}

function close_menu(){
    document.getElementsByTagName('header')[0].classList.remove("active");
    document.getElementsByTagName('body')[0].classList.remove("active");
}