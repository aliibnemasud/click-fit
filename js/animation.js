$(document).ready(function(){

	$('#carousel-inner').waypoint(function(direction) {

        $(".carousel-inner").addClass("animated fadeInDown")


		
	},{offset:'60%'});

	/* $('#fade_in_left').waypoint(function(direction) {
		myfunc_fadeInLeft(this.element, direction);
	},{offset:'60%'});

	$('#fade_in_right').waypoint(function(direction) {
		myfunc_fadeInRight(this.element, direction);
	},{offset:'60%'});

	$('#slide_in_up').waypoint(function(direction) {
		myfunc_slideInUp(this.element, direction);
	},{offset:'60%'});

	$('#zoom_in').waypoint(function(direction) {
		myfunc_zoomIn(this.element, direction);
	},{offset:'50%'}); */



	function myfunc_fadeInDown(target, direction){
		if(direction === "down"){
			$(target).addClass("animated fadeInDown");
      
			setTimeout(function(){
    		$(target).removeClass("animated fadeInDown");
    		$(target).removeClass("hidden");
    	}, 1000);
		}
	}

	function myfunc_fadeInLeft(target, direction){
		if(direction === "down"){
			$(target).removeClass("hidden");
			$(target).addClass("animated fadeInLeft");

			setTimeout(function(){
    			$(target).removeClass("animated fadeInLeft");
      }, 1000);
		}
	}

	function myfunc_fadeInRight(target, direction){
		if(direction === "down"){
			$(target).removeClass("hidden");
			$(target).addClass("animated fadeInRight");

			setTimeout(function(){
    			$(target).removeClass("animated fadeInRight");
    	}, 1000);
		}
	}

	function myfunc_slideInUp(target, direction){
		if(direction === "down"){
			$(target).removeClass("hidden");
			$(target).addClass("animated slideInUp");
			setTimeout(function(){
    			$(target).removeClass("animated slideInUp");
    		}, 1000);
		}
	}

	function myfunc_zoomIn(target, direction){
		if(direction === "down"){
			$(target).removeClass("hidden");
			$(target).addClass("animated zoomIn");
			setTimeout(function(){
    			$(target).removeClass("animated zoomIn");
    	}, 1000);
		}
	}

});