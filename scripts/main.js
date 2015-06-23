// Roscoe and Jane Biz Site, Week Five Lecture 2 Homework, jQuery
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
    $(responsiveNav).fitText(1.5); //0.8, {minFontSize: "40px", maxFontSize: "80px"}


    // OTHER POSSIBLE TEXT RESIZE CODE
    // var $body = $('body'); //Cache this for performance

    // var setBodyScale = function() {
    //     var scaleSource = $body.width(),
    //         scaleFactor = 0.35,                     
    //         maxScale = 600,
    //         minScale = 30; //Tweak these values to taste

    //     var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

    //     if (fontSize > maxScale) fontSize = maxScale;
    //     if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

    //     $('body').css('font-size', fontSize + '%');
    // }

    // $(window).resize(function(){
    //     setBodyScale();
    // });

    // //Fire it when the page first loads:
    // setBodyScale();
});