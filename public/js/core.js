

/*if ($('.pageloader').length) {

    $('.pageloader').toggleClass('is-active');

    $(window).on('load', function() {
        var pageloaderTimeout = setTimeout( function() {
            $('.pageloader').toggleClass('is-active');
            $('.infraloader').toggleClass('is-active')
            clearTimeout( pageloaderTimeout );
        }, 300 );
    })
}*/

function functionPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() { 
    document.getElementById("myPopup").classList.toggle("show");}, 2000);
}
/*
$('.btn-counter').on('click', function(event,count){
  event.preventDefault();
  var $this = $(this),
  count = $this.attr('data-count'),
  active = $this.hasClass('active'),
  multiple = $this.hasClass('multiple-count');
  
  $.fn.noop =$.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count )[multiple ? 'noop' : 'toggleClass']('active');

});
*/
function toggleDarkLight(){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

$(document).ready(function(){
  $('.button').on('click',function(){
    $('.loader-wrapper').addClass('is-active');
    setTimeout(function(){
      $('.loader-wrapper').removeClass('is-active');
    },3000)
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 