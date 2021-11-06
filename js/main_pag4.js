$(document).ready(function() {
    $('.header').height($(window).height());

})

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

})

function mostrar() {
    div = document.getElementById('prendas_azules');
    div.style.display = '';
}