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
// $('.galerie img').click(function(){
//     $('.popUp_img').html($(this).clone());
//     $('.popUp').show(1000);

// $('.popUp .left').click(function(){
//    $('.popUp_img').html($(this).clone().prev()); 
// });
// });

// $('.delete').click(function(){
//     $('.popUp').hide(500);
// });

// $('.popUp .right').click(function(){
//     console.log($('.galerie img'));
//     console.log($(this).parent().siblings());
//    $('.popUp_img').html($(this).parent().siblings().find('img')); 
// });

$('.galerie img').click(function(){
    $('.popUp').fadeIn(300);
    $($(this).data('img1')).show();
    // if (nbr <= 6) {
    //     nbr++;
    // }else if (nbr == 7) {
    //     nbr = 0;
    // }
});

$('.delete').click(function(){
    $('.popUp').fadeOut(300);
});

// $('.right').click(function(){
//     $('.img'+nbr).fadeOut(200, function(){
//         if (nbr <= 5) {
//             $('.img'+nbr+1).fadeIn(200);
//         }else if(nbr == 6){
//             $('.img')
//         }
//     });
// });


});