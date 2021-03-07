(function($) {
	if ($('.kausid-carousel').length) {
			$(".kausid-carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}
// ======================================




// ======================================		
})(window.jQuery);


(function() {
	"use strict";
 /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
		offset:120,
      duration: 1000
    })
  });

})()  