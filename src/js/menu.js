
$(function() {
    
    function hideModals(){
	    $(document.body).removeClass('modal-open');
        $(".menu-burger").addClass("is-hidden");
    }

     $(".header-list-modal li a").click(function() {   
         hideModals();
    })

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