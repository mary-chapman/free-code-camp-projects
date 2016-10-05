//$("#runningTotal").text(0);
var runTotal = $("#runningTotal").text();
var click = 0;
//var btnVal = "";
//var keys = Number($("#ans").text());

//for RUNNING TOTAL
//if (runTotal)


//to DISPLAY the number 
function display() {
		$(".num").on("click", function() {
			amt = Number($(this).text());
			//$("#ans").append(amt);
			runTotal += amt;
			$("#runningTotal").append(amt);
		});
}

display();
//to CLEAR the div
$("#clear").on("click", function() {
	$("#ans").html("hello");
	runTotal = 0;
	Number($("#runningTotal").text(""));
});
//to ADD
$("#add").on("click", function() {
	$("#ans").append();;
	runTotal += "+";
	//$("#ans").empty();
	$("#runningTotal").append("+");
});
//to DIVIDE
$("#divide").on("click", function() {
	$("#ans").append();;
	runTotal += "+";
	//$("#ans").empty();
	$("#runningTotal").append("+");
});

$("#equals").on("click",function() {
	console.log(eval(runTotal));
	$("#ans").text(eval(runTotal));
});
/*


var first = 0;
//to ADD
function add() {
	var total;
	var currentVal;
	var prevVal;
	$("#add").on("click", function() {
		console.log(runTotalNum);
		$("#ans").empty();
		total = runTotalNum + Number($("#ans").text());
		runTotalNum = total;
		//$("#ans").text(runTotalNum);
	});
		$("#equals").on("click", function() {
			total = runTotalNum + Number($("#ans").text());
			runTotalNum = total;
			$("#ans").text(runTotalNum);
			console.log("total" + total);
			console.log("runTotalNum" + runTotalNum);
			
		});
	
}


add();
*/