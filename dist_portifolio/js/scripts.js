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

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://demo8378319.mockable.io/empresas');
xhr.onload = function() {
    if (xhr.status === 200) {
        data = JSON.parse(xhr.response);
        for(i = 0 ; i < data.length ; i++){
            document.getElementById("experience").innerHTML += 
            '<div class="row">'+
                '<div class="col-md-12">'+
                    '<div id="experience-timeline">'+
                        '<div class="vtimeline-content">'+
                        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><h3>' + data[i]["empresa"] + '</h3>' +
                        '<h4>' + data[i]["cargo"] + '</h4>' +
                        '<p>' +
                            data[i]['atividades']
                        '</p>' +
                        '</div>'+
                    '</div>' +
                '</div>' +
            '</div>';
        }
    }
    else {
        console.log('A requisição falhou ' + xhr.status);
    }
};
xhr.send();

