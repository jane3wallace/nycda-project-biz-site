// Biz Site, Week Five Lecture 2 Homework, jQuery
$(document).ready(function() {
	
  // Google Map
	function initialize() {
        var mapCanvas = document.getElementById("map-canvas");
        var mapOptions = {
          center: new google.maps.LatLng(34.2192152, -118.6451717),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }
    google.maps.event.addDomListener(window, "load", initialize);

    // FitText
    var responsiveName = document.getElementById("responsive-name");
    $(responsiveName).fitText();

    var responsiveNav = document.getElementById("responsive-nav");
    $(responsiveNav).fitText(1.5, {minFontSize: "32px", maxFontSize: "80px"});


    // Magnific Popup
    // $('.galleryItem').magnificPopup({type:'image'});
    $('.galleryContainer').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{enabled:true}
    });

});