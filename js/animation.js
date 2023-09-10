$(document).ready(function(){

	$('.fade_in_down').waypoint(function(direction) {
		fadeInDown(this.element, direction);       
	},{offset:'60%'});

	$('.fade_in_left').waypoint(function(direction) {
		fadeInLeft(this.element, direction);
	},{offset:'60%'});

	$('.fade_in_right').waypoint(function(direction) {
		fadeInRight(this.element, direction);
	},{offset:'60%'});

	$('.slide_in_up').waypoint(function(direction) {
		slideInUp(this.element, direction);
	},{offset:'60%'});

	$('.zoom_in').waypoint(function(direction) {
		zoomIn(this.element, direction);
	},{offset:'50%'});

	$('.fade_in').waypoint(function(direction) {
		fadeIn(this.element, direction);
	},{offset:'50%'});



	const fadeInDown = (target, direction) => {
		if(direction === "down"){
			$(target).addClass('animate__animated animate__fadeInDown animate__slower');
			$(target).removeClass("hiddenObject");        
		}
	};


    const fadeInLeft = (target, direction) => {
        if(direction === "down"){
			$(target).addClass('animate__animated animate__fadeInLeft animate__slower');
			$(target).removeClass("hiddenObject");     
		}
    }

    const fadeInRight = (target, direction) => {
        if(direction === "down"){
			$(target).addClass('animate__animated animate__fadeInRight animate__slower');
			$(target).removeClass("hiddenObject");       
		}
    }

    const slideInUp = (target, direction) => {
        if(direction === "down"){
			$(target).addClass('animate__animated animate__slideInUp animate__slower');
			$(target).removeClass("hiddenObject");		       
		}
    }
    const zoomIn = (target, direction) => {
        if(direction === "down"){
			$(target).addClass('animate__animated animate__zoomIn animate__slower');
            $(target).removeClass("hiddenObject");
		}
    }

    const fadeIn = (target, direction) => {
        if(direction === "down"){
			$(target).addClass('animate__animated animate__fadeIn animate__slower');
			$(target).removeClass("hiddenObject");			     
		}
    }	

});