$.fn.inner_float = function() {
	var child_id=$(this).attr("id");
	var parent_class=$(this).parent().attr("Class");
	$(this).css('position','absolute');
	$(this).parent().css('position','relative');
	var parent_height=$(this).parent().height();
	var child_height=$(this).height();
	var child_top=$(this).offset().top;
	var parent_top=$(this).parent().offset().top;
    window.onscroll = function() {myFunction()};
	function myFunction() {
		var scrollTop=document.documentElement.scrollTop;
	    if ( scrollTop > child_top && scrollTop < (parent_top+parent_height-child_height)){
	        // child_top=0;
	        $("#"+child_id).offset({top:scrollTop});
	        console.log('1');
	    } 
	    else if(scrollTop < child_top) {
	    	console.log('2');
	    	// child_top-=10;
	        $("#"+child_id).offset({top:child_top});
	    }
	    else if(scrollTop > (parent_top+parent_height-child_height)) {
	    	console.log('3');
	    	// child_top-=10;
	        $("#"+child_id).offset({top:parent_top+parent_height-child_height});
	    }
	}
}
/* Call your plugin */
$(document).ready(function(){
	   $('#almost-show').inner_float({
	});
});
