$(document).ready(function() {
    $("#form").submit(function(e) {
	e.preventDefault();
    var d = new Date();
    var n = d.getTime();
	var sdata = {
		"content": "Hey there @here, DnDTime has gone live on twitch! Come check it out!",
	    "embeds": [{
		"description": "**["+$("#title").val()+"](https://twitch.tv/dndtime)**\n"+$("#desc").val(),
		"color": 6570404,
		"timestamp": d,
		"footer": {
			"icon_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a6d79381f007c412-profile_image-70x70.png",
			"text": "Started Streaming",
		},
		"image": {
		    "url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dndtime-768x432.jpg?"+n
		}
	    }]
	};
	$.ajax({
	    url: $("#webhook").val(),
	    type: 'POST',
	    data: JSON.stringify(sdata),
	    contentType: "application/json"
	})
    });
});
