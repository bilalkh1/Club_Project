$(document).ready(function(){
//description
$('.description_button').click(function(){
    $('.description').slideUp(2000);
    $('.description_detail').slideDown(2000);
});
$('.description_retoure').click(function(){
    $('.description_detail').slideUp(2000);
    $('.description').slideDown(2000);
});
//activite
$('.activite_button').on('click',function(){
    $('.activite').slideUp(2000);
    $('.activite_detail').slideDown(2000);
});
$('.activite_retoure').on('click',function(){
    $('.activite_detail').slideUp(2000);
    $('.activite').slideDown(2000);
});
// galerie
$('.galerie div').on('mouseenter mouseleave',function () {
    $($(this).data('img')).toggleClass('img_');
    $(this).addClass('galerie_hover');
});
//galerie popUp
$('.galerie img').click(function(){
    $('.popUp').fadeIn(300);
    $($(this).data('img1')).show();
});

$('.delete').click(function(){
    $('.popUp').fadeOut(300);
});

});