//navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
        fixedWidth : 250,
        fixedHeight: 250,
        gap        : 10,
        rewind     : true,
        pagination : false,
        isNavigation: true,
        focus      : 'center',
        breakpoints: {
          600: {
            fixedWidth : 60,
            fixedHeight: 44,
          },
        },
      } ).mount();
  } );

 
