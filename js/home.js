var random = Math.floor((Math.random() * 200)) + 2000; 
$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, random);
});
