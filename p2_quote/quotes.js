console.log("hi");



$.getJSON("https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json", function(data){
	
	var q;
	var author;
	
	$("#qt").on("click", function() {
		var newContent = '';
		var tweetIcon = '';
		var rand = Math.floor(Math.random() * data.length);
		q = data[rand].text;
		author = data[rand].from;
		newContent += "<p>" + q + '"' + "<br>" + "-" + author + "</p>";
		tweetIcon += "<img src='twitterIcon.png' width=40>";
		$("#quote").html(newContent);
		$("#pic").html(tweetIcon);
		
	});

	$('#pic').on('click', function() {
		var url = "https://twitter.com/intent/tweet?text=" + q + '-' + author;
		window.open(url, '_blank');
	});


	
	
});


