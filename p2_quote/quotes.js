console.log("hi");



$.getJSON("https://raw.githubusercontent.com/fortrabbit/quotes/master/quotes.json", function(data){

	var q;
	var author;

	$("#qt").on("click", function() {
		var newContent = '';
		var tweetIcon = '';
		var rand = Math.floor(Math.random() * data.length);
		q = data[rand].text;
		var w = q.replace("\"", "X");
		console.log(w);
		author = data[rand].author;
		newContent += "<p>" + q + "<br>" + "-" + author + "</p>";
		tweetIcon += "<img src='twitterIcon.png' width=40>";
		$("#quote").html(newContent);
		$("#pic").html(tweetIcon);

	});



	$('#pic').on('click', function() {
		var url = "https://twitter.com/intent/tweet?text=" + q + '-' + author;
		window.open(url, '_blank');
	});




});
