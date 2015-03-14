jQuery(document).ready(function($){
	

	
	jQuery('#rf-theme-switcher-button, #rf-theme-switcher-button-show').click(function(){
		
		jQuery('#rf-theme-switcher, #rf-theme-switcher-button-show').toggleClass('open');
		
		if (!jQuery.cookie("rf-theme-switcher") || jQuery.cookie("rf-theme-switcher") == "open") {
			jQuery.cookie("rf-theme-switcher", "closed", { expires: 1 });
		} else {
			jQuery.cookie("rf-theme-switcher", "open", { expires: 1 });
		}
		
		return false;
		
	});


	
	if (!jQuery.cookie("rf-theme-switcher") || jQuery.cookie("rf-theme-switcher") == "open") {
		var delay = setTimeout(function(){
				$('#rf-theme-switcher').toggleClass('open');
		}, 3000);
	}

});