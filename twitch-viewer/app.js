//client ID = f8di8rwh02th6nznrf6xqnzqsjr6iyb

var users = ["ESL_SC2", "brunofin", "OgamingSC2", "cretetion", "comster404", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urls = [];


for (var i = 0; i < users.length; i++) {
  var url1 = "https://api.twitch.tv/kraken/streams/";
  var url2 = users[i];
  var url3 = "?client_id=f8di8rwh02th6nznrf6xqnzqsjr6iyb&callback=?";
  var url = url1 + url2 + url3;
  urls.push(url);
}
var getUsers= function(){
     var url ="https://api.twitch.tv/kraken/streams/" + users[i] +"?client_id=7slsxf0da18e4dn8rou1dw1ji1oxsca";
       $.ajax({
         url:url,
         dataType:'jsonp',
         type:"GET",
         success:function(data){
             // check if user is online or offline or has been deleted
             if(data.stream === null){
                 offline(data);
             }
             else if(data.message){
                 deleted(data);
             }
             else
             {
                 online(data);
             }
         },
         error:function(){
             console.log("error");
         }
    });//ajax end
}//get users end

//executes the 'getUsers' function for each user
for (var i = 0; i < users.length; i++) {
  getUsers();
}

//functions of where to put the data within the dom
function online(data) {
  var userName = data._links.self.slice(37);
  var link = data.stream.channel.url;
  var desc = data.stream.game
  $("#onlineUsers").append('<a href=' + link + '><p class="on">' + userName + ": " + desc + '</p></a>');
}

function offline(data) {
  var userName = data._links.channel.slice(38);
  var link = "http://www.twitch.tv/" + userName;
  $("#offlineUsers").append("<a href=" + link + "><p class='off'>" + userName + "</p></a>");
}

function deleted(data) {
  $("#deletedUsers").append("<p class='deleted'>" + data.message + '</p>');
}

//for hiding/showing users based on status
$("#offlineUsers").hide();
$("#onlineUsers").hide();
$("#deletedUsers").hide();
$("#allBtn").on("click", function() {
  $("#onlineUsers").show();
  $("#offlineUsers").show();
  $("#deletedUsers").show();
});
$("#onlineBtn").on("click", function() {
  $("#offlineUsers").hide();
  $("#onlineUsers").show();
  $("#deletedUsers").hide();
});
$("#offlineBtn").on("click", function() {
  $("#offlineUsers").show();
  $("#onlineUsers").hide();
  $("#deletedUsers").hide();
});




  /*

/*
    var url1 = "https://api.twitch.tv/kraken/streams/";
    var url2 = users[i];
    var url3 = "?client_id=f8di8rwh02th6nznrf6xqnzqsjr6iyb&callback=?";
    var url = url1 + url2 + url3;

    $.getJSON(url, function(data) {

          console.log(url);
          if (data.hasOwnProperty("error")) {
            console.log("NO LONGER: " + url2);
          }
          else if (data.stream === null) {
            console.log("OFFLINE: " + url2);
          }

          else if (data.stream.game) {
            console.log("ONLINE: " + url2);
          }
      })


}
***/
