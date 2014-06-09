(function ($) {

	$(document).ready(function() {
		
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