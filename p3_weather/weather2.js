//google api key = AIzaSyDQWdgNB4FExQQA0jjgAFM7D0mj1oRgIpw
//wunderground key = 64bc356c51373c14

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

  var URL2 = "https://api.wunderground.com/api/64bc356c51373c14/conditions/q/CA/San_Francisco.json";
  //console.log(URL);
	//to get the WEATHER INFO
	$.getJSON(URL2, function(data) {
      console.log(URL2);
  });
		/******************* TEMP ***************************/
});
/************* CHANGING THE CITY **********************/
