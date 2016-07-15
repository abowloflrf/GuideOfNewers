function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}

$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax()
	});
});



var toggleHeaderFloating = function() {
			// Floating Header
			if ( $(window).scrollTop() > 80 ) {
				$( '.nav' ).addClass( 'floating' );
			} else {
				$( '.nav' ).removeClass( 'floating' );
			};
		};
var toggleSidebarFixed = function(){
			if ( $(window).scrollTop() > 700 ) {
				$( '.side-bar' ).addClass( 'fixed' );
			} else {
				$( '.side-bar' ).removeClass( 'fixed' );
			};

}

		$(window).on( 'scroll', toggleHeaderFloating );
		$(window).on( 'scroll', toggleSidebarFixed );
