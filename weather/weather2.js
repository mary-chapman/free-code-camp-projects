//google api key = AIzaSyDQWdgNB4FExQQA0jjgAFM7D0mj1oRgIpw
//wunderground key = 64bc356c51373c14

//IP ADDRESS
  var urlIp = "https://api.wunderground.com/api/64bc356c51373c14/geolookup/q/autoip.json";
  var currentCity;
  $.getJSON(urlIp, function(data) {
    currentCity = data.location.city;
    currentState = data.location.state;
    $("#city").text(currentCity + ", " + currentState);
    if (currentCity.search(/\s/) > -1) {
        currentCity = currentCity.replace(/\s/, "_");
    }
   //WEATHER CONDITION
    var urlCityPart1 = "https://api.wunderground.com/api/64bc356c51373c14/conditions/q/";
    var urlCityPart2 = currentState + '/' + currentCity;
    var urlCityPart3 = ".json";
    var urlCity = urlCityPart1 + urlCityPart2 + urlCityPart3;
    console.log(urlCity);

    $.getJSON(urlCity, function(data) {
        //display TEMPERATURE
        var temp_f = data.current_observation.temp_f.toFixed();
        var temp_c = data.current_observation.temp_c.toFixed();
        $("#description").html('<p>' + temp_f + '&deg</p>');
        //to change UNITS of temperature
        $("#C").on("click", function() {
            $("#description").html('<p>' + temp_c + '&deg</p>');
            $("#C").css("border", "5px solid pink");
            $("#F").css("border", "none");
        });
        $("#F").on("click", function() {
            $("#description").html('<p>' + temp_f + '&deg</p>');
            $("#F").css("border", "5px solid pink");
            $("#C").css("border", "none");
        });
        //display ICON
        var iconURL = data.current_observation.icon_url;
        console.log(iconURL);
        $("#icon").html("<img src=" + iconURL + ">")

    });//getJSON data end

});//getJSON IP data end
