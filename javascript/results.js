//html elements that will need to be referenced latter are assigned variable names.
var back = $("#back");
var results = $("#results");
var next = $("#next");
var prev = $("#prev");
var city = "";

//The getEvent function takes in a set of search perameters and outputs a list of events from the ticketmaster api. It also genertes the html elements that display these events.
function getEvent(keyword, radius, startDate, endDate, segId, genreId, geohash) {
    //The ticketmaser api is used to get event information.
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu&keyword=" + keyword + "&radius=" + radius + "&locale=*&startDateTime=" + startDate + "&endDateTime=" + endDate + "&sort=date,asc&segmentId=" + segId + "&genreId=" + genreId + "&geoPoint=" + geohash)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        if (data._embedded == null) {
                            $("#noResults").text("No Results");
                        } else {

                            //PageNav info.
                            if (data._links.next != null) {
                                $("#nextPage").text(data._links.next.href);
                            } else {
                                $("#next").css("display", "inline-block");
                            }

                            if (data._links.prev != null) {
                                console.log(data._links.next.href);
                                $("#prevPage").text(data._links.next.href);
                                $("#prev").css("display", "inline-block");
                            } else {
                                $("#prev").css("display", "none");
                            }
                            displayResults(data);
                        }


                    })
            }
        })
}

function getEventNext(urlNext) {
    //The ticketmaser api is used to get event information.
    fetch("https://app.ticketmaster.com" + urlNext + "&apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        //Next and prev page info.
                        if (data._embedded == null) {
                            $("#noResults").text("No Results");
                        } else {
                            if (data._links.next != null) {
                                $("#nextPage").text(data._links.next.href);
                                $("#next").css("display", "inline-block");
                            } else {
                                $("#next").css("display", "none");
                            }

                            if (data._links.prev != null) {
                                $("#prevPage").text(data._links.prev.href);
                                $("#prev").css("display", "inline-block");
                            } else {
                                $("#prev").css("display", "none");
                            }
                            results.empty();
                            displayResults(data)
                        }


                    })
            }
        })
}

function displayResults(data) {
    var eventArray = data._embedded.events;
    //This for loop itterates through all events returned by the ticketmaster api
    for (var i = 0; i < eventArray.length; i++) {
        //First, all required values are extracted from the ticketmaser api object that is returned bt the fetch.
        var name = eventArray[i].name;
        var date = eventArray[i].dates.start.localDate;
        var time = eventArray[i].dates.start.localTime;
        var url = eventArray[i].url;
        var distance = eventArray[i].distance;
        //moment.js is used to convert date and time to desiredd format.
        date = moment(date, "YYYY-MM-DD").format("MM-DD-YYYY");
        time = moment(time, "HH:mm:ss").format("hh:mm A");


        //All html elements needed to display the results are created and fgiven the proper attributes.
        var row = $("<div></div>").attr("class", "row")
        var collumn = $("<div></div>").attr("class", "col s12")
        var card = $("<div></div>").attr("class", "card blue-grey darken-1")
        var cardContent = $("<div></div>").attr("class", "card-content white-text")
        var nameEl = $("<span>" + name + "</span>").attr("class", "card-title")
        var distanceEl = $("<p>Distance: " + distance + " miles</p>")
        var dateEl = $("<p>Date: " + date + "</p>")
        var timeEl = $("<p>Time: " + time + "</p>")
        var urlEl = $("<p><a>Event Site</a></p>");
        urlEl.children().attr("href", url);
        urlEl.children().attr("class", "waves-effect waves light btn inline")
        //The storageArray is a hidden component of each result and will be used by the local storage system to store event info.
        var storageArray = JSON.stringify([name, date, time, url, distance, city]);
        var storageEl = $("<li>" + storageArray + "</li>").css("display", "none");
        var saveli = $("<li></li>")
        var save = $("<a>Save Event</a>").attr("class", "waves-effect waves light btn inline")
        //all events are given an button with an event listener that will handle saving the event through the local storage system.
        save.on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            event.target.textContent = "Saved";
            var btn = $(event.target);
            var eventName = btn.parent().children()[0].textContent;
            //First, we check if the local storage array has been created yet. If it hasn't we will create it and if it has, we will extract it and edit it.
            if (localStorage.saved == null) {
                //In this case the local storage array does not exist yet, so we create it. Each event will be stored as an array within the 'savedArray'
                var savedArray = [];
                //We use the savedEvent array that is hidden in each events html, to quickly extract all event info. 
                var savedEvent = btn.parent().children()[6].textContent;
                //The savedArray is updated with te new event info and put into local storage.
                savedArray.push(JSON.parse(savedEvent));
                localStorage.setItem("saved", JSON.stringify(savedArray));
            } else {
                //Here we do the same thing as in the if statement, but te savedArray already exists in local storage, so we take it out and edit it insetead of create it.
                var savedArray = JSON.parse(localStorage.getItem("saved"));
                var alreadySaved = false;
                //Since the array already exists and we don't want to save the same event more than once, we check to see if the event that the user is trying to save is already in local storage.
                //Need to update this to check event name and date, bacause some events that occur on different days have the same name.
                //This for loop checks local storage to see if the event the user is curretly trying to save ahs already been saved.
                for (var x = 0; x < savedArray.length; x++) {
                    var event = savedArray[x];
                    if (event[0] == eventName) {
                        alreadySaved = true;
                    }
                }
                //If the event has not already been saved it is pushed into local storag.
                if (!alreadySaved) {
                    var savedArray = JSON.parse(localStorage.getItem("saved"));
                    var savedEvent = btn.parent().children()[6].textContent;
                    savedArray.push(JSON.parse(savedEvent));
                    localStorage.setItem("saved", JSON.stringify(savedArray));
                }
            }

        })
        //All html elements are appended into the document.
        saveli.append(save);
        var hr = $("<hr>");
        cardContent.append(nameEl, distanceEl, dateEl, timeEl, hr, urlEl, storageEl, save);
        card.append(cardContent);
        collumn.append(card);
        row.append(collumn);
        results.append(row);
    }

}
//The extractParameters function extracts the search parameters from the url that we passed this page from the search page.
function extractParameters() {
    var url = window.location.href;
    var params = url.split("?")[1].split("=").join(",").split("&").join(",").split(",");
    var paramsArray = []
    for (var i = 0; i < params.length; i++) {
        if (i % 2 == 1) {
            if (params[i] === "%20") {
                paramsArray.push("")
            } else {
                paramsArray.push(params[i]);
            }
        }
    }
    //The paramsArray contains all query parameter keywords and its values are passed to the get event function whick will query the api given the input query parameters from the user.
    city = paramsArray[0];
    getEvent(paramsArray[1], paramsArray[2], paramsArray[3], paramsArray[4], paramsArray[5], paramsArray[6], paramsArray[7])
}

//This event listener allows the user to go back to te search page.
back.on("click", function () {
    document.location.replace("../index.html");
})

//This event listener allows the user to avigate to the saved events page.
$("#saved").on("click", function () {
    document.location.replace("../saved/saved.html");
})

next.on("click", function () {
    var url = $("#nextPage").text();
    getEventNext(url);
})

prev.on("click", function () {
    var url = $("#prevPage").text();
    getEventNext(url);
})


//The extract Parameters function is called when the page loads so results are displayed right away.
extractParameters()
