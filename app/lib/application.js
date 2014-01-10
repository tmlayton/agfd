$(function() {
	//filters pillar display for sign up pages, needs to be moved
	if (getQueryString("pillars").length > 0) {
		var pillars = getQueryString("pillars").split("+");
		for (var i = 0; i < pillars.length; i++) {
	    $(".pillars li:contains(" + pillars[i] + ")").addClass("active").css("display","inline-block");
		}	
	}
	
	//prevents link and buttons from being clicked
	var dragging = false;
	$("body").on("touchmove", function(){ dragging = true; });
	$("body").on("touchstart", function(){ dragging = false; });
	
	//custom handler for all links which dont have an ad hoc handler
	$("a:not(.adhoc)").on("touchend click", function(e){ 
		if (dragging) 
			return; 

		e.stopPropagation(); 
		e.preventDefault();

		var href = $(this).attr("href");
		var target = $(this).attr("target");

		if (href && href != "#") {
			if (target && target == "_blank")
				window.open(href);
			else
				window.location.href = href;
		}

		if (e.type == "touchend") {
			$(this).addClass("touch").delay(100).queue(function(next){
				$(this).removeClass("touch");
    		next();
			});
		}
	});

	//custom handler for selects
	$("select").on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); $(this).focus(); });

	//custom handler for inputs
	$("input").on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); $(this).focus(); });
	
	//handles opening and closing the menu
	$("#showMenu").on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); menuToggle(); });
	$("#closeMenu").on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); menuToggle(); });
	$("#showMenu, #closeMenu").on("touchstart", function(e){ $(this).off("click").on("click", function(e){ e.preventDefault(); }); });
	
	//handles pillar selection
	$(".pillars li").on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); if ($(".pillars li.active").length < 4 || $(this).hasClass("active")) $(this).toggleClass("active"); });

	//handles pillar form
	$('.looking-for a.next').on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); pillarFormHandler(); });

	//handles info form
	$('.info a.next').on("touchend click", function(e){ if (dragging) return; e.stopPropagation(); e.preventDefault(); infoFormHandler(); });

	//handles what's this? modal, prevented from firing if the menu is open
	//$('.sample .what').on("touchend click", function(e){ if (dragging || $("#showMenu").hasClass("active")) return; e.stopPropagation(); e.preventDefault(); blackoutAlert("This shows updates from members with a matching pillar to give you an idea of the sort of things members are sharing."); });
});

function menuToggle() {
	$("#showMenu").toggleClass("active");
	$("section.push").toggleClass("push-to-left");
}

function pillarFormHandler() {
	var errorArray = new Array();
	var queryStrings = "?";

	if ($(".pillars li.active").length == 4) {
		queryStrings = queryStrings + "pillars=";
		$(".pillars li.active").each(function() {
			queryStrings = queryStrings + $(this).text() + "+";
		});
		queryStrings = queryStrings.substring(0, queryStrings.length-1) + "&";
	}
	else {
		errorArray.push("Please select 4 pillars");
	}

	switch ($(".looking-for select").first().val()) {
		case "I am a...":
			errorArray.push("Please select your gender");
		default:
			queryStrings = queryStrings + "gender=" + $(".looking-for select").first().val() + "&";
	}

	switch ($(".looking-for select").last().val()) {
		case "Looking for a...":
			errorArray.push("Please select the gender you seek");
		default:
			queryStrings = queryStrings + "lookingfor=" + $(".looking-for select").last().val();
	}

	if (errorArray.length > 0) {
		console.log(errorArray);
		return;
	}
	else {
		window.location.href = "sign-up.html" + queryStrings;
	}
}

function infoFormHandler() {
	var errorArray = new Array();
	var queryStrings = "?";

	//code here

	if (errorArray.length > 0) {
		console.log(errorArray);
		return;
	}
	else {
		//window.location.href = "photo.html" + queryStrings;
	}
}

function getQueryString(name) {
  name = RegExp ('[?&]' + name.replace (/([[\]])/, '\\$1') + '=([^&#]*)');
  return (window.location.href.match (name) || ['', ''])[1];
}