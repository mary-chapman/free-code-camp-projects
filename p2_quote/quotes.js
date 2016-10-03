console.log("hi");



$.getJSON("https://raw.githubusercontent.com/simplyianm/motivate/master/quotes.json", function(data){

	var q;
	var author;

	$("#qt").on("click", function() {
		var newContent = '';
		var tweetIcon = '';
		var rand = Math.floor(Math.random() * data.length);
		q = data[rand].body;


		author = data[rand].source;
		newContent += "<p>" + q + "<br>" + "-" + author + "</p>";
		tweetIcon += "<img src='twitterIcon.png' width=40>";

		$("#quote").html(newContent).fadeIn("slow");





		$("#pic").html(tweetIcon);

	});



	$('#pic').on('click', function() {
		var url = "https://twitter.com/intent/tweet?text=" + q + '-' + author;
		window.open(url, '_blank');
	});




});
