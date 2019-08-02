$(document).ready(function() {

// register a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../scripts/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// smooth scrolling
const scrollLink = $("nav a, .scroll");
const navHt = $("nav").outerHeight(true);
scrollLink.click(function(e){
  e.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top - (navHt/2)}, 250)
})
// active link switching
const activeLink = $("nav a");
$(window).scroll(function() {
    const scrollbarLocation = $(this).scrollTop();
    activeLink.each(function() {
      const sectionOffset = $(this.hash).offset().top - navHt;
      if (sectionOffset <= scrollbarLocation) { 
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      }
    })  
}); 

// Landing Elements
// Visibility plugin, returns true of false
(function($) {
  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

//animation when visible
const win = $(window);
const allGrids = $(this).find('aside, article');
allGrids.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } else {
    el.css('visibility', 'hidden'); // Hidden
  }
});
win.scroll(function(event) {
  allGrids.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
      el.css('visibility', 'visible'); // Visible
    } 
  });
});

// Scroll to Top button
const headerHt = $("#hero").outerHeight(true);
$(window).scroll(function() { // If page is scrolled more than the header
  if ($(this).scrollTop() >= headerHt) { 
      $('.topBtn').fadeIn(200);    // Fade in the arrow
  } else {
      $('.topBtn').fadeOut(200);   // Else fade out the arrow
  }
});

// Modal data, get button, get close button
var modal = document.getElementById("modal");
var modalText = document.getElementsByClassName("modalText");
var closeBtn = document.getElementById("closeBtn");
var modalId = ["modal1", "modal2", "modal3", "modal4", "modal5", "modal6", "modal7", "modal8","modal9", "modal10"]
var modals = ["pdfs/LAgroundbasin.pdf", "pdfs/ForecastVerification.pdf", "pdfs/LAWater Sustainability.pdf", 
              "pdfs/JAHP.pdf", "pdfs/HydrologyReport.pdf", "pdfs/JAHPposter.pdf", 
              "pdfs/EIT_Itai_Axelrad.pdf", "pdfs/Axelrad_LEED_GA.pdf","pdfs/CampSL.pdf","pdfs/TreatmentDesignTraining.pdf"]

// When the user clicks the button, open the corresponding modal 
$(modalText).click(function(event) {
  var clicked_id = event.target.id;
    function matchModal(string) {
      return string == clicked_id;
    }
    var text = event.target.textContent;
    var i = modalId.findIndex(matchModal);
    document.getElementById("modalObject").setAttribute('data', modals[i]);
    document.getElementById("modalTitle").textContent = text;
    modal.showModal();
});
// When the user clicks on (x), close the modal
closeBtn.onclick = function() {
    modal.close();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.close();
    }
  }

// ready!
});
