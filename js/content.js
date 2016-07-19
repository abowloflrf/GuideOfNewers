
var toggleHeaderFloating = function() {
			// Floating Header
			if ( $(window).scrollTop() > 80 ) {
				$( '.navbar' ).addClass( 'navbar-floating' );
				$( '#logo' ).addClass( 'logo-floating' );
				$('.navbar-right').addClass('navbar-right-floating');
			} else {
				$( '.navbar' ).removeClass( 'navbar-floating' );
				$( '#logo' ).removeClass( 'logo-floating' );
				$('.navbar-right').removeClass('navbar-right-floating');
			};
		};

		$(window).on( 'scroll', toggleHeaderFloating );
