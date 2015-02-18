(function($) {
    	
        $(document).ready(function ($) {


        /* Image select */

        $('body').on('click', 'img.vce-img-select', function(e){
            e.preventDefault();
            $(this).closest('ul').find('img.vce-img-select').removeClass('selected');
            $(this).addClass('selected');
             $(this).closest('ul').find('input').removeAttr('checked');
                $(this).closest('li').find('input').attr('checked','checked');

            if($(this).closest('ul').hasClass('next-hide')){
                var v = $(this).closest('li').find('input:checked').val();
                if(v == 'inherit' || v == 0){
                     $(this).closest('.form-field').next().fadeOut(400);
                } else {
                    $(this).closest('.form-field').next().fadeIn(400);
                }
            }
        });

    	/* Color picker metabox handle */
    	
    	if($('.vce_colorpicker').length){
    		$('.vce_colorpicker').wpColorPicker();

    		$('a.vce_colorpick').click(function(e){
    			e.preventDefault();
    			$('.vce_colorpicker').val($(this).attr('data-color'));
    			$('.vce_colorpicker').change();
    		});	
    	}

    	vce_toggle_color_picker();
    	
    	$("body").on("click", "input.color-type", function(e){
					vce_toggle_color_picker();
		});
			   
    	function vce_toggle_color_picker(){
    		var picker_value = $('input.color-type:checked').val();
    		if(picker_value == 'custom'){
    			$('#vce_color_wrap').show();
    		} else {
    			$('#vce_color_wrap').hide();
    		}
    	}

    });
    	
})(jQuery);