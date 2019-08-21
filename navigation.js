$(document).ready(function() {
    $(".jqMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
        if ($(clickedID + ":visible").length) {
            $(clickedID).slideToggle(200);
        } else if ($(".ddmenu:visible").length) {
            $(".ddmenu:visible").slideUp(50, function() {
                $(clickedID).slideToggle(200);
				});
		} else {
			$(clickedID).slideToggle(200);
        }
    });
});
$(document).ready(function() {
    $(".jqMMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
		$(clickedID).slideToggle(200);
    });
});
$(document).ready(function() {
	$("a").click(function () {
		if ($(this).hasClass("redtext")) {
			$("a").removeClass("redtext");
		} else {
			$("a").removeClass("redtext");
			$(this).toggleClass("redtext");
		}
	});
});
