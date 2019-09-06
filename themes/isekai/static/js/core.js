function functionPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() { 
    document.getElementById("myPopup").classList.toggle("show");}, 2000);
}
$('.btn-counter').on('click', function(event,count){
  event.preventDefault();
  var $this = $(this),
  count = $this.attr('data-count'),
  active = $this.hasClass('active'),
  multiple = $this.hasClass('multiple-count');
  
  $.fn.noop =$.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count )[multiple ? 'noop' : 'toggleClass']('active');

});

function toggleDarkLight(){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function openNav(){
  document.getElementById("sideNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("sideNav").style.width = "0";
}