// Sean Smith

// Facebook comments plugin
var facebook = function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs);
};

// Toggle night / day mode
var day = true;

var comments = false;

// Toggle comments when arrow is pressed
$(function() {
	facebook(document, 'script', 'facebook-jssdk');
	$("#comments_title").click(function(){
		$("#facebook_comments").toggle();
		$('html, body').scrollTop( $(document).height() );
		if (comments) {
			$("#arrow").html("&#9660;");
			comments = false;
		}
		else {
			$("#arrow").html("&#9650;");
			comments = true;
		}
	});

	/* Day / Night Mode */
	$("#title").click(function(){
		if (day) {
			$("body").removeClass("day").addClass("night");
			$('#s_icon').attr('data', "/img/super_blue.svg");
			day = false;
		}
		else {
			$("body").removeClass("night").addClass("day");
			$('#s_icon').attr('data', "/img/super_black.svg");
			day = true;
		}
	});
});
