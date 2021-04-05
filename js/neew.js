 window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  
$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.Background').toggleClass('lock');
    $('.top,.topf').toggleClass('active');
    $('.Block_Work_list2').removeClass('active');
  });
});

  $('.Block_Work_Title').click(function(event) {
    $('.Block_Work_list,.Block_Work_list2').toggleClass('active');
  });
   $('.hedear_link').click(function(event){
    $('.header_burger,.header_menu').removeClass('active');
    $('.Background').removeClass('lock');
    $('.top,.topf').removeClass('active');
  });
   $( window ).scroll(function() {
  $('.Block_Work_list').removeClass('active');
   $('.Background').removeClass('lock');
   $('.top,.topf').removeClass('active');1
 });
   $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  ;
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 $(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('.top').animate({'right':'15px'},500);
        else
        $('.top').stop(true).animate({'right':'-230px'},400);   
    });
 $(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 340){$('.topf').addClass('fall');
       
     } else {
      $('.topf').removeClass('fall');
     }

});
 $('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
});

 var swiper = new Swiper('.Case1', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      slidesPerGroup: 3,
      spaceBetween: 30,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable:true,
  },
    });
  
  var swiper1 = new Swiper('.Case2',{
  spaceBetween: 30,
  slidesPerColumnFill: "row",
  loop:true,
   autoplay: {
    delay: 3000,
    disableOnInteraction:false,    
  },
  
  slidesPerView:2, 
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
 });
 $('.BG1').hover(function(event){
    $('.NBG1').toggleClass('active');
    $('.Pb1').toggleClass('active');
    $('.LBG1').toggleClass('active');
 });

 $('.BG2').hover(function(event){
    $('.NBG2').toggleClass('active');
    $('.Pb2').toggleClass('active');
    $('.LBG2').toggleClass('active');
 });

 $('.BG3').hover(function(event){
    $('.NBG3').toggleClass('active');
    $('.Pb3').toggleClass('active');
    $('.LBG3').toggleClass('active');
 });

 $('.BG4').hover(function(event){
    $('.NBG4').toggleClass('active');
    $('.Pb4').toggleClass('active');
    $('.LBG4').toggleClass('active');
 });
 $('.BG5').hover(function(event){
    $('.NBG5').toggleClass('active');
    $('.Pb5').toggleClass('active');
    $('.LBG5').toggleClass('active');
 });
 $('.H1').hover(function(event){
    $('.HLC1').toggleClass('active');
 });
 $('.H2').hover(function(event){
    $('.HLC2').toggleClass('active');
 });
 $('.H3').hover(function(event){
    $('.HLC3').toggleClass('active');
 });
 $('.H4').hover(function(event){
    $('.HLC4').toggleClass('active');
 });
 $('.H5').hover(function(event){
   $('.HLC5').toggleClass('active');
 });
 $('.H6').hover(function(event){
    $('.HLC6').toggleClass('active');
 });
 window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}