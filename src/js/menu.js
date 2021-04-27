
$(function() {
    
     $(".header-list-modal li a").click(function() {   
         $(".menu-burger").toggleClass("is-hidden");
         $(document.body).removeClass('modal-open');
    })

	function hideModals(){
	    $(document.body).removeClass('modal-open');
        $(".menu-burger").addClass("is-hidden");
    }
    
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.menu-burger').length)
		||	($(e.target).hasClass('menu-burger'))
        ||	($(e.target).hasClass('button-burger__icon')))
		) {
			hideModals();
		}
	});
});