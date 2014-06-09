(function ($) {

	$(document).ready(function() {

		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			}
		});

		$('#btn-borrar').click(function(){
			$('.input-text').val('');
			$('#form-consulta').val('');
			return false;
		});

		$('.porton-sistema-corredizo').show();
		$('.cortinas-plana').show();

		$('.link-contenido').click(function(){
			$('.link-contenido').removeClass('active');
			$('.tipo-porton').hide();
			$('.tipo-cortina').hide();
			$('.corredizos-par-1').hide();
			$(this).addClass('active');
			$('.' + $(this).attr('id')).show();
		});
	});
	
})(jQuery);