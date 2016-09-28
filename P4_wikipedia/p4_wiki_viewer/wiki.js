 
        /*
        var urlBeg = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&text=";
        var urlInput = "Jimi_Hendrix";
        var urlEnd = "&callback=?";
        var urlX = urlBeg + urlInput + urlEnd;
    */



$(document).ready(function(){
    $("#search").click(function() {
        var userInput = $("#wikipedia").val();
        console.log(userInput);
        $.ajax({
            type: "GET",

            url: 'http://en.wikipedia.org/w/api.php',
            data: { action: 'query',  list: 'search', srsearch: userInput, srprop: "snippet", format: 'json' },
            dataType: 'jsonp',
            success: function (data, textStatus, jqXHR) {
                //var markup = data.parse.text["*"];
                $("#links").empty();
                for (var i = 0; i < data.query.search.length; i++) {
                    var search = data.query.search;
                    var link = "http://en.wikipedia.org/wiki/" + data.query.search[i].title;
                    $("#links").append('<a href="' + link  + '"><li class="eachLink"><span class = "title">' + search[i].title + '</span><span class="search">' + ' ' + '</li></a>');
                    /**************** WITH TITLE ********************/
                    //$("#links").append('<a href="' + link  + '"><li class="eachLink"><span class = "title">' + search[i].title + '</span><span class="search">' + ' ' + search[i].snippet + '</li></a>');
                    console.log(link);


                        $(".eachLink").on("mouseover", function() {
                            $(this).css("background-color", "#ffffe6");
                        });
                        $(".eachLink").on("mouseout", function() {
                            $(this).css("background-color", "rgba(211, 211, 211, .3)");
                        });
                }
            },
            error: function (errorMessage) {
            }
        });//ajax end
    });
});//ready function end





