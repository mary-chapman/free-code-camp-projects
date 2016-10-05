var btnVal;
var runningTotal = "";
var add = false;


$(".num").on("click", function() {
	if ($("#ans").text().length < 12) {
		btnVal = $(this).text();
		$("#ans").append(btnVal);
		runningTotal += btnVal;
	}
	else {
		return false;
	}
});
$("#clear").on("click", function() {
	$("#ans").empty();
	$("#total").empty();
	runningTotal = "";
});

$("#dec").on("click", function() {
	$("#ans").append(".");
	runningTotal += ".";
});
$("#openParen").on("click", function() {
	$("#ans").append("(");
	runningTotal += "(";
});
$("#closeParen").on("click", function() {
	$("#ans").append(")");
	runningTotal += ")";
});

/**************OPERATIONS**************/
$("#add").on("click", function() {
	$("#ans").append("+");
	runningTotal += "+";
});
$("#divide").on("click", function() {
	$("#ans").append("/");
	runningTotal += "/";
});
$("#multiply").on("click", function() {
	$("#ans").append("*");
	runningTotal += "*";
});
$("#subtract").on("click", function() {
	$("#ans").append("-");
	runningTotal += "-";
});

//the equals functions returns the answer however, it goes past the length of the div. 
//To avoid this I figured out the length of the whole number (the number - the modulus of 1) 
//I then subtracted this number from the length of the number (you need to convert this to a string first), 
//once I figured out this number I subtracted it from the length I want (12) to come up with the number I want to round to
var total;

$("#equals").on("click", function() {
	total = eval(runningTotal);
	var totalLength = total.toString().length;
	$("#total").text(total);
	var wholeNumber = total - total % 1;
	var wholeNumberLength = wholeNumber.toString().length;
	
	if (totalLength < 12) {
		$("#total").text(total);
	}
	else {
		var decAmt = totalLength - 
		$("#total").text(total.toFixed(12 - wholeNumberLength));
	}
	
});


/**************FOR DRAGGING TOTAL to ADDITION BOX**********************/
$(function() {
	var sum = 0
		$("#arrow").on("click", function() {
			
			if ($("#total").text() === "") {
				return false;
			}//if end
			else
			{
		        $("#total").clone()
		        	.appendTo("#addBox").css({
		        		
		        		'color': '#fff',
		        		
		        		'font-size': '14pt',
		        		'background-color': '#464655'
				})
		        .addClass("savedTotal")
		        .append('<button class="notes">add notes</button>')
			}
			sum += total;
			console.log(sum);
			$(".x").text(sum);
		    $(".notes").on("click", function() {
		    	if ($(this).children().length < 1) {
		    		$(this).html("<input type='text'></input>");
		    		$(this).css("background-color", "#f1dede");
		    	}
		    	//$(this).append("<input type='text' class='inputNotes'></input>");
		    });

	    });//arrow click end


});// function end










