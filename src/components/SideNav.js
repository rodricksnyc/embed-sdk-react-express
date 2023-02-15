
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


function ToTopButton(props) {






  function scrollfn2(e) {
  	// e.preventDefault();
    //
    //  $('html, body').animate({scrollTop:0}, '300');
    //
    //
    //
    //
    // $(this).addClass('activated')
    // $(this).attr('data-target')
    //

  }


$(window).on('scroll', function() {

	var screenTop = $(window).scrollTop();
	var screenBottom = $(window).scrollTop() + window.innerHeight;

	$('section').each(function() {
		var elementTop = $(this).offset().top;
		var elementBottom = $(this).offset().top + $(this).outerHeight();

		if ((screenBottom > elementTop + ($(this).find('.heros').height() / 2 )) && (screenTop < elementBottom)) {
			$('section').removeClass('active')
			$(this).addClass('active')
		}
		else {
			$(this).removeClass('active')
		}
	})

	if ($('.start').hasClass('active')) {

		$('li[data-target="#home"]').addClass('activated')
	}

	else {
		$('li[data-target="#home"]').removeClass('activated')

	}

	if ( $('.block10').hasClass('active') ||  $('.block000').hasClass('active')  ) {

		$('li[data-target="#overview"]').addClass('activated')


	}

	else {

		$('li[data-target="#overview"]').removeClass('activated')
	}

	if ($('.block50').hasClass('active') || $('.block111').hasClass('active') || $('.block333').hasClass('active') || $('.block9000').hasClass('active')) {


		$('li[data-target="#info"]').addClass('activated')
	}

	else {

		$('li[data-target="#info"]').removeClass('activated')
	}


	if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')  ) {

		$('li[data-target="#participation"]').addClass('activated')
	}

	else {

		$('li[data-target="#participation"]').removeClass('activated')
	}



	if ($('.block5').hasClass('active') || $('.block555').hasClass('active')) {

		$('li[data-target="#survey"]').addClass('activated')
	}

	else {

		$('li[data-target="#survey"]').removeClass('activated')
	}

	if ($('.block20').hasClass('active') || $('.block222').hasClass('active')) {
		$('li[data-target="#feedback"]').addClass('activated')

	}

	else {

		$('li[data-target="#feedback"]').removeClass('activated')
	}




	if ($('.block5').hasClass('active')) {

		$('li[data-target="#two"]').addClass('activated')
	}

	else {

		$('li[data-target="#two"]').removeClass('activated')
	}

	if ($('.block55').hasClass('active')) {

		$('li[data-target="#three"]').addClass('activated')
	}

	else {

		$('li[data-target="#three"]').removeClass('activated')
	}



	if ($('.block444').hasClass('active')) {

		$('li[data-target="#parentSurvey"]').addClass('activated')
	}

	else {

		$('li[data-target="#parentSurvey"]').removeClass('activated')
	}


})



  return (

    <div class="container_0">
				<div class="menu-buttons-floating">
					<ul class="menu-buttons-floating-list">
						<li tabindex="0" data-target="#overview" class="activated"
                onClick={() => scrollfn2()}>
            <i class="fas fa-info-circle"></i>
            </li>
						<li tabindex="0" data-target="#survey"
                onClick={() => scrollfn2()}>
                <i class="fal fa-server"></i>
                </li>
						<li tabindex="0" data-target="#feedback"
                onClick={() => scrollfn2()}>
            <i class="fas fa-comment-lines"></i>
            </li>
						<li tabindex="0" data-target="#info"
              onClick={() => scrollfn2()}>
              <i class="fas fa-book-reader"></i>
              </li>
					</ul>
				</div>


				<div class="menu-buttons-768">
					<ul class="menu-buttons-768-list">
						<li tabindex="0" data-target="#overview" class="activated"><i class="fas fa-info-circle"></i></li>
						<li tabindex="0" data-target="#survey"><i class="fal fa-server"></i></li>
						<li tabindex="0" data-target="#feedback"><i class="fas fa-comment-lines"></i></li>
						<li tabindex="0" data-target="#info"><i class="fas fa-book-reader"></i></li>
					</ul>
				</div>




</div>

  )
};




export default ToTopButton;
