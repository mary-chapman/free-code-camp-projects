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
	var urlAPI = "&APPID=3e3284eaa0c7e6d2c0e05835606a37e9&callback=?";
	var URL = urlBeg + urlCity + urlUnitsX + urlUnits + urlAPI;
	console.log(URL);

  //to get the WEATHER INFO
	$.ajax({
    type: "GET",
    url: URL,
    dataType: "jsonp",
    success: function(data) {
      console.log(data);
    }
  });//ajax open weather info end


});//get JSON geolocation end
