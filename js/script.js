// slowly scroll

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

// deactivate & activate header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
});

// slowly writing text in main page
var typed = new Typed('.typed', {
    strings: ["Hi, my name is"],
    typeSpeed: 80
  });


let swithMode = document.getElementById("swithMode")


// switch theme site
swithMode.onclick = function() {
    let theme = document.getElementById("theme")

     if(theme.getAttribute("href") == "css/light-style.css") {
        theme.href = "css/dark-style.css"
     } else {
        theme.href = "css/light-style.css"
     }
}

// Loader

