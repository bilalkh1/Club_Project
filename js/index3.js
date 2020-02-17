$(document).ready(function(){
$('.description_button').on('click',function(){
    $('.description').hide();
    $('.description_detail').show();
});
$('.description_retoure').on('click',function(e){
    
    $('.description_detail').hide();
    $('.description').show();
    e.preventDefault;
});
  //la galerie
$('.galerie div').on('mouseenter mouseleave',function () {
        $($(this).data('img')).toggleClass('img_');
        $(this).addClass('fr');
    });
//l'activite
$('.activite_button').on('click',function () {
   $('.activite').hide();
   $('.activite_detail').show(); 
});
$('.activite_retoure').on('click',function () {
    $('.activite_detail').hide();
    $('.activite').show();
});
});



//eil et sourie

/* var sourie=document.getElementsById('sourie');
document.addEventListener('mousemove',function (e) {
    var x=e.clientX;
    var y=e.clientY;
    sourie.style.left=x+"px";
    sourie.style.top=y+"px";
    console.log(x+"%"+y+"%");
});*/

var eil_1_noire=document.getElementsByClassName('eil_1_noire');
document.addEventListener('mousemove',function () {
    console.log("e=" + event.clientX);
    console.log("s=" + event.clientY);
    z=event.clientX*100/window.innerWidth + "%";
    w=event.clientY*100/window.innerHeight + "%";

    for (var i = 0; i < eil_1_noire.length; i++) {
        eil_1_noire[i].style.transform ="translate("+z+","+w+")";
    }
});