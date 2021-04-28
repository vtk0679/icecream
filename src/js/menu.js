
$(function() {
    
    function hideModals(){
	    $(document.body).removeClass('modal-open');
        $(".menu-burger__backdrop").addClass("is-hidden");
    }

     $(".header-list-modal li a").click(function() {   
         hideModals();
    })

	$(".menu-burger__backdrop").on('click', function(e){
			hideModals();
    });
    
    $(document).on('keydown',function(event) {
        if (event.keyCode == 27) {
            hideModals();
        }
    });
});