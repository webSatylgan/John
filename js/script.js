$('.header__btn').on('click', function() {
    $('.burger').addClass('active')
});

$('.burger__logo').on('click', function(){
    $('.burger').removeClass('active')
});

$('.contact').on('click', function(item){

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
        
    }, {
        duration: 1000,
        easing: 'swing'
    });

    $('.burger').removeClass('active')

    return false;

});