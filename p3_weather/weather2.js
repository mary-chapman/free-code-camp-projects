//google api key = AIzaSyDQWdgNB4FExQQA0jjgAFM7D0mj1oRgIpw

var city = "";
var region = "";
var temp;
console.log(navigator.geolocation);

/******************* GEOLOCATION INFO ***************************/
$.getJSON('https://ipinfo.io/', function(data){
  city += data.city;
  region += data.region;
  $("#city").append(city + ', ' + region);
  //to remove the blank space if city is two words
  /*if (city.search(" ") > -1) {
	city = city.replace(/\s/, "+");
}
	/******************* WEATHER INFO BASED ON GEOLOCATION ***************************/
	//URL
	console.log(city);
	var urlBeg = "http://api.openweathermap.org/data/2.5/weather?q=";
	var urlCity = city;
	var urlUnitsX = "&units="
	var urlUnits = "imperial&callback=?";
	var urlAPI = "&APPID=3e3284eaa0c7e6d2c0e05835606a37e9";
	var URL = urlBeg + urlCity + urlUnitsX + urlUnits + urlAPI;
	console.log(URL);
	//to get the WEATHER INFO
	$.getJSON(URL, function(data) {
		/******************* TEMP ***************************/
		temp = data.main.temp;


		$("#description").html(temp.toFixed() + "&deg;")
		//METRIC or IMPERIAL
		var unitState = F;
		$("#C").on("click", function() {
			//if unitStat is C - do nothing
			if (unitState === C) {
				return false;
			} else {
				$("#C").css("border-color", "pink");
				$("#F").css("border-color", "#fff");
				var newTemp = (data.main.temp - 32) * 5/9;
				newTemp = newTemp.toFixed();
				$("#description").html(newTemp + "&deg;");
				console.log(newTemp);
				unitState = C;
			}
		});//c convert end
		//CONVERTS UNITS C to F when btn is pressed
		$("#F").on("click", function() {
			//if unitStat is F - do nothing
			if (unitState === F) {
				return false;
			} else {
				$("#F").css("border-color", "pink");
				$("#C").css("border-color", "#fff");
				var newTemp = data.main.temp;
				newTemp = newTemp.toFixed();
				$("#description").html(newTemp + "&deg;");
				console.log(newTemp);
				unitState = F;
			}
		});
		/******************* DESCRIPTION ***************************/
		var desc = data.weather[0].description;
		//var desc = "clear sky";
		console.log(desc);

		if (desc === "clear sky") {
			$("#window").css('background-image', "url('pic/clear_sky.png')");
		}
		if (desc === "few clouds") {
			$("#window").css('background-image', "url('pic/few_clouds.png')");
		}
		if (desc === "scattered clouds") {
			$("#window").css('background-image', "url('pic/scattered_clouds.png')");
		}
		if (desc === "broken clouds") {
			$("#window").css('background-image', "url('pic/broken_clouds.png')");
		}
		if (desc === "showered rain") {
			$("#window").css('background-image', "url('pic/showered_rain.png')");
		}
		if (desc === "rain") {
			$("#window").css('background-image', "url('pic/rain.png')");
		}
		if (desc === "heavy intensity rain") {
			$("#window").css('background-image', "url('pic/rain.png')");
		}
		if (desc === "thunderstorm") {
			$("#window").css('background-image', "url('pic/thunderstorm.png')");
		}
		if (desc === "snow") {
			$("#window").css('background-image', "url('pic/snow.png')");
		}
		if (desc === "mist") {
			$("#window").css('background-image', "url('pic/mist.png')");
		}
		if (desc === "overcast clouds") {
			$("#window").css('background-image', "url('pic/overcast_clouds.png')");
		}
		if (desc === "light rain") {
			$("#window").css('background-image', "url('pic/light_rain.png')");
		}

    /************* CHANGING THE CITY **********************/
    var URLInput;





      $(".search").on("click", function(){
        var userInput = $(".cityInput").val();
        var zipBeg = "zip=";
        var zipEnd = $(".cityInput").val() + ",us";
        var zip = zipBeg + zipEnd;
        var zipOrCity;

        if (userInput.match(/\d{5}/)) {
          zipOrCity = zip;
        }
        else {
          zipOrCity = userInput;
        }

        URLInput = urlBeg + zipOrCity + urlUnitsX + urlUnits + urlAPI;

        $.getJSON(URLInput, function(data) {
          var location = data.name + ", " + data.sys.country;
          $("#city").html(location);
          var tempInput = data.main.temp;
          $("#description").html(tempInput.toFixed() + "&deg;")

          /*code for day or night*/
          var sunset = data.sys.sunset;
          var time = data.dt;
          if (time < sunset) {
            console.log("day");
          }
          else {
            console.log("night");
          }
          console.log(zip);
        });//search button end
      }, json-p); //getJSON (user city) button end

	}, json-p);//getJSON (geolocation) end





});
/************* CHANGING THE CITY **********************/
