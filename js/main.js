$(function(){

	$('.list__inner .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.list__inner').find('.tab-item').removeClass('active-tab').hide();
			$('.list__inner .tabs').find('.tab').removeClass('active');
			$(this).addClass('active');
			$('#'+id).addClass('active-tab').fadeIn();
			return false;
		});

		$('.reviews__chapter').on('click', function(event) {

			var id = $(this).attr('data-id');
				console.log(id);
				$('.reviews__items').find('.reviews__tab').removeClass('active-tab').hide();
				$('.reviews__header').find('.reviews__chapter').removeClass('active');
				$(this).addClass('active');
				$('#'+id).addClass('active-tab').fadeIn();
				return false;
			});

			$('.default-btn').click(function(event) {
				$('.modal').modal({
					fadeDuration: 200
				});
				return false;
			});

});