$.fn.inner_float = function() {
	var child_id=$(this).attr("id");
	var parent_class=$(this).parent().attr("Class");
	var parent_height=$(this).parent().height();
	var child_height=$(this).height();
	var child_top=$(this).offset().top;
	var parent_top=$(this).parent().offset().top;
    window.onscroll = function() {myFunction()};
	function myFunction() {
		var scrollTop=document.documentElement.scrollTop;
	    if ( scrollTop > child_top && scrollTop < (parent_top+parent_height-child_height)){
	        $("#"+child_id).offset({top:scrollTop});
	    } 
	    else if(scrollTop < child_top) {
	        $("#"+child_id).offset({top:child_top});
	    }
	    else if(scrollTop > (parent_top+parent_height-child_height)) {
	        $("#"+child_id).offset({top:parent_top+parent_height-child_height});
	    }
	}
}
/* Call your plugin */
$(document).ready(function(){
	   $('#almost-show').inner_float({
	});
});
