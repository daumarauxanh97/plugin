$.fn.inner_float = function(obj) {
	var child_id=$(this).attr("id");
	var parent_height=$(this).parent().height();
	var child_height=$(this).height();
	var child_top=$(this).offset().top;
	var parent_top=$(this).parent().offset().top;
    window.onscroll = function() {myFunction()};
    var top=parseInt(obj.top);
	function myFunction() {
		var scrollTop=document.documentElement.scrollTop;
	    if ( scrollTop > child_top && scrollTop < (parent_top+parent_height-child_height-top)){
	        $("#"+child_id).offset({top:scrollTop+top});
	    } 
	    else if(scrollTop < child_top) {
	        $("#"+child_id).offset({top:child_top});
	    }
	    else if(scrollTop > (parent_top+parent_height-child_height-top)) {
	        $("#"+child_id).offset({top:parent_top+parent_height-child_height-top});
	    }
	}
}
/* Call your plugin */
$(document).ready(function(){
	    $('#almost-show').inner_float({
	    	top:"10px"
	});

});
