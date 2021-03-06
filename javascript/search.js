//The event type object gives us a reference to every event segment and genre type. ALl results are broken up into different segmnets and each segment has some number of associated genres. The ticketmaster api requirs a genre id as opposed to the name, so this object allows us to easily convert form name to id. It also serves as a way to dynamically change the genre dropdown based upon which category (or segment) is selected on the form. This way the user can only select genres that are an actual subcategory of a given segment.
var eventType = { "Miscellaneous": { "id": "KZFzniwnSyZfZ7v7n1", "genres": [{ "Casino/Gaming": { "id": "KnvZfZ7vAAa" }, "Comedy": { "id": "KnvZfZ7vAA1" }, "Community/Civic": { "id": "KnvZfZ7vAAE" }, "Community/Cultural": { "id": "KnvZfZ7v7lE" }, "Fairs & Festivals": { "id": "KnvZfZ7vAeE" }, "Family": { "id": "KnvZfZ7vA1n" }, "Food & Drink": { "id": "KnvZfZ7vAAI" }, "Health/Wellness": { "id": "KnvZfZ7vAAl" }, "Hobby/Special Interest Expos": { "id": "KnvZfZ7vAAJ" }, "Holiday": { "id": "KnvZfZ7vAAt" }, "Ice Shows": { "id": "KnvZfZ7v7lI" }, "Lecture/Seminar": { "id": "KnvZfZ7vAJe" }, "Multimedia": { "id": "KnvZfZ7vAAF" }, "Psychics/Mediums/Hypnotists": { "id": "KnvZfZ7vAAn" }, "Special Interest/Hobby": { "id": "KnvZfZ7v7lt" }, "Undefined": { "id": "KnvZfZ7v7ll" } }] }, "Sports": { "id": "KZFzniwnSyZfZ7v7nE", "genres": [{ "Aquatics": { "id": "KnvZfZ7vAeI" }, "Athletic Races": { "id": "KnvZfZ7vAet" }, "Badminton": { "id": "KnvZfZ7vAen" }, "Bandy": { "id": "KnvZfZ7vAel" }, "Baseball": { "id": "KnvZfZ7vAdv" }, "Basketball": { "id": "KnvZfZ7vAde" }, "Biathlon": { "id": "KnvZfZ7vAdd" }, "Body Building": { "id": "KnvZfZ7vAd7" }, "Boxing": { "id": "KnvZfZ7vAdA" }, "Cricket": { "id": "KnvZfZ7vAdk" }, "Curling": { "id": "KnvZfZ7vAdF" }, "Cycling": { "id": "KnvZfZ7vAda" }, "Equestrian": { "id": "KnvZfZ7vAd1" }, "eSports": { "id": "KnvZfZ7vAJF" }, "Extreme": { "id": "KnvZfZ7vAdJ" }, "Field Hockey": { "id": "KnvZfZ7vAJv" }, "Fitness": { "id": "KnvZfZ7vAJ7" }, "Floorball": { "id": "KnvZfZ7vA1l" }, "Football": { "id": "KnvZfZ7vAdE" }, "Golf": { "id": "KnvZfZ7vAdt" }, "Gymnastics": { "id": "KnvZfZ7vAdn" }, "Handball": { "id": "KnvZfZ7vAdl" }, "Hockey": { "id": "KnvZfZ7vAdI" }, "Ice Skating": { "id": "KnvZfZ7vA7v" }, "Indoor Soccer": { "id": "KnvZfZ7vA7e" }, "Lacrosse": { "id": "KnvZfZ7vA77" }, "Martial Arts": { "id": "KnvZfZ7vA7d" }, "Miscellaneous": { "id": "KnvZfZ7vA7A" }, "Motorsports/Racing": { "id": "KnvZfZ7vA7k" }, "Netball": { "id": "KnvZfZ7vA76" }, "Rodeo": { "id": "KnvZfZ7vAea" }, "Roller Derby": { "id": "KnvZfZ7vAJA" }, "Roller Hockey": { "id": "KnvZfZ7vA7a" }, "Rugby": { "id": "KnvZfZ7vA71" }, "Ski Jumping": { "id": "KnvZfZ7vA7J" }, "Skiing": { "id": "KnvZfZ7vAd6" }, "Soccer": { "id": "KnvZfZ7vA7E" }, "Softball": { "id": "KnvZfZ7vAJd" }, "Squash": { "id": "KnvZfZ7vA7I" }, "Surfing": { "id": "KnvZfZ7vA7t" }, "Swimming": { "id": "KnvZfZ7vA7n" }, "Table Tennis": { "id": "KnvZfZ7vA7l" }, "Tennis": { "id": "KnvZfZ7vAAv" }, "Toros": { "id": "KnvZfZ7vAAe" }, "Track & Field": { "id": "KnvZfZ7vAAd" }, "Volleyball": { "id": "KnvZfZ7vAA7" }, "Waterpolo": { "id": "KnvZfZ7vAAA" }, "Wrestling": { "id": "KnvZfZ7vAAk" } }] }, "Music": { "id": "KZFzniwnSyZfZ7v7nJ", "genres": [{ "Alternative": { "id": "KnvZfZ7vAvv" }, "Ballads/Romantic": { "id": "KnvZfZ7vAve" }, "Blues": { "id": "KnvZfZ7vAvd" }, "Chanson Francaise": { "id": "KnvZfZ7vAvA" }, "Children's Music": { "id": "KnvZfZ7vAvk" }, "Classical": { "id": "KnvZfZ7vAeJ" }, "Country": { "id": "KnvZfZ7vAv6" }, "Dance/Electronic": { "id": "KnvZfZ7vAvF" }, "Folk": { "id": "KnvZfZ7vAva" }, "Hip-Hop/Rap": { "id": "KnvZfZ7vAv1" }, "Holiday": { "id": "KnvZfZ7vAvJ" }, "Jazz": { "id": "KnvZfZ7vAvE" }, "Latin": { "id": "KnvZfZ7vAJ6" }, "Medieval/Renaissance": { "id": "KnvZfZ7vAvI" }, "Metal": { "id": "KnvZfZ7vAvt" }, "New Age": { "id": "KnvZfZ7vAvn" }, "Other": { "id": "KnvZfZ7vAvl" }, "Pop": { "id": "KnvZfZ7vAev" }, "R&B": { "id": "KnvZfZ7vAee" }, "Reggae": { "id": "KnvZfZ7vAed" }, "Religious": { "id": "KnvZfZ7vAe7" }, "Rock": { "id": "KnvZfZ7vAeA" }, "Undefined": { "id": "KnvZfZ7vAe6" }, "World": { "id": "KnvZfZ7vAeF" } }] }, "Arts & Theatre": { "id": "KZFzniwnSyZfZ7v7na", "genres": [{ "Children's Theatre": { "id": "KnvZfZ7v7na" }, "Circus & Specialty Acts": { "id": "KnvZfZ7v7n1" }, "Classical": { "id": "KnvZfZ7v7nJ" }, "Comedy": { "id": "KnvZfZ7vAe1" }, "Cultural": { "id": "KnvZfZ7v7nE" }, "Dance": { "id": "KnvZfZ7v7nI" }, "Espectaculo": { "id": "KnvZfZ7v7nt" }, "Fashion": { "id": "KnvZfZ7v7nn" }, "Fine Art": { "id": "KnvZfZ7v7nl" }, "Magic & Illusion": { "id": "KnvZfZ7v7lv" }, "Miscellaneous": { "id": "KnvZfZ7v7le" }, "Miscellaneous Theatre": { "id": "KnvZfZ7v7ld" }, "Multimedia": { "id": "KnvZfZ7v7l7" }, "Music": { "id": "KnvZfZ7v7lA" }, "Opera": { "id": "KnvZfZ7v7lk" }, "Performance Art": { "id": "KnvZfZ7v7l6" }, "Puppetry": { "id": "KnvZfZ7v7lF" }, "Spectacular": { "id": "KnvZfZ7v7la" }, "Theatre": { "id": "KnvZfZ7v7l1" }, "Variety": { "id": "KnvZfZ7v7lJ" } }] }, "Undefined": { "id": "KZFzniwnSyZfZ7v7nl", "genres": [{ "Undefined": { "id": "KnvZfZ7vAkI" } }] }, "Film": { "id": "KZFzniwnSyZfZ7v7nn", "genres": [{ "Action/Adventure": { "id": "KnvZfZ7vAke" }, "Animation": { "id": "KnvZfZ7vAkd" }, "Arthouse": { "id": "KnvZfZ7vAk7" }, "Comedy": { "id": "KnvZfZ7vAkA" }, "Documentary": { "id": "KnvZfZ7vAkk" }, "Drama": { "id": "KnvZfZ7vAk6" }, "Family": { "id": "KnvZfZ7vAkF" }, "Foreign": { "id": "KnvZfZ7vAk1" }, "Horror": { "id": "KnvZfZ7vAJk" }, "Miscellaneous": { "id": "KnvZfZ7vAka" }, "Music": { "id": "KnvZfZ7vAkJ" }, "Science Fiction": { "id": "KnvZfZ7vAJa" }, "Urban": { "id": "KnvZfZ7vAkE" } }] } }

//html items that will need to be targeted later are assigned variables.
var categoryEl = $("#category");
var categoryEl2 = $("#category2");
var subCategoryEl = $("#subCategory");
var subCategoryEl2 = $("#subCategory2");
var cityEl = $("#city");
var cityEl2 = $("#city2");
var submit = $("#submit");
var submit2 = $("#submit2");
var myLocation = $("#myLocation");
var myLocation2 = $("#myLocation2");
var saved = $("#saved");


//The set defaults function sets the start and end date to be the current date and 30 days from the current date. This function is called as the page loads
function setDefaults() {
    var currentDate = moment().format("YYYY-MM-DD");
    var oneMonth = moment().add("30", "days").format("YYYY-MM-DD");
    $("#startDate").attr("value", currentDate);
    $("#endDate").attr("value", oneMonth);
    $("#startDate2").attr("value", currentDate);
    $("#endDate2").attr("value", oneMonth);
}

//The get location function powers the "use your current location" button by finding he users location according to their ip. This function uses the abstract ipgeolocation api.
function getLocation(index) {
    fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=ae719e5173304649b7f31e033c8a5ecf")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        var cityName = data.city;
                        if (index == 1) {
                            cityEl.val(cityName)
                            cityEl.attr("value", cityName);
                        } else {
                            cityEl2.val(cityName)
                            cityEl2.attr("value", cityName);
                        }

                    })
            }
        })
}

//The cityCoords function takes a city name and converts it to a latitude and longitude. This function uses the openweathermap api.
function cityCoords(city) {
    if (city === "") {
        var city = cityEl.attr("value");
    }
    return fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=4&appid=2d5a13d9312ee895b46814ad5a65ff9f")
        .then(function (response) {
            if (response.ok) {
                return response.json()
                    .then(function (data) {
                        if (data.length == 0) {
                            //This alert is shown if the api is unable to find results for a searched city name. It also sends a "break" message to the searched function which triggers it to return and not exicute the search.
                            $("#modal2").attr("class", "modal show");
                            return "break";
                        } else {
                            var lat = data[0].lat;
                            var lon = data[0].lon;
                            return [lat, lon];
                        }

                    })
            }
        })
}

//This eventlistener allows for the sub-catagory dropdown to dynamically update its selection options based on what is currently selected in the category dropdown.
function categoryChange(event) {
    var currentCategory = $(event.target).val();
    //Select is not a catagory so it is handeled in the else.
    if (currentCategory != "select") {
        if ($(event.target).attr("id") == "category") {
            //an array of the names of a given catagories' subcatagories is genreated using the eventType object.
            var subCategoryArray = Object.keys(eventType[currentCategory].genres[0]);
            //The previious options for the sub-category are cleared out using .empty()
            subCategoryEl.empty();
            //a new select option is created so the first sub-category option is chosen by default.
            var select = $("<option disabled selected>Sub-Category Select</option>").attr("value", " ");
            subCategoryEl.append(select);
            //This for loop runs through the sub-category array and generates the required html elements to display them as dripdown options.
            for (var i = 0; i < subCategoryArray.length; i++) {
                if (subCategoryArray[i] != "Undefined") {
                    var option = $("<option>" + subCategoryArray[i] + "</option>").attr("value", subCategoryArray[i]);
                    subCategoryEl.append(option);
                }
            }
        } else {
            //an array of the names of a given catagories' subcatagories is genreated using the eventType object.
            var subCategoryArray = Object.keys(eventType[currentCategory].genres[0]);
            //The previious options for the sub-category are cleared out using .empty()
            subCategoryEl2.empty();
            //a new select option is created so the first sub-category option is chosen by default.
            var select = $("<option disabled selected>Sub-Category Select</option>").attr("value", " ");
            subCategoryEl2.append(select);
            //This for loop runs through the sub-category array and generates the required html elements to display them as dripdown options.
            for (var i = 0; i < subCategoryArray.length; i++) {
                if (subCategoryArray[i] != "Undefined") {
                    var option = $("<option>" + subCategoryArray[i] + "</option>").attr("value", subCategoryArray[i]);
                    subCategoryEl2.append(option);
                }
            }
        }
        //In the case that the category dropdown is put back to the "select" option, the sub-catagory drupdown is emtied out.
    } else {
        subCategoryEl.empty();
        var select = $("<option>Select</option>").attr("value", " ");
        subCategoryEl.append(select);
    }
}

categoryEl.on("change", categoryChange);
categoryEl2.on("change", categoryChange);



//This event listener triggers the getLocation function when the myLocation button is clicked.
myLocation.on("click", function (event) {
    event.preventDefault();
    getLocation(1);
})

myLocation2.on("click", function (event) {
    event.preventDefault();
    getLocation(2);
})




//This event listener allows the user to navigate the the saved events page.
saved.on("click", function () {
    document.location.replace("saved/saved.html");
})

$("#modal2Close").on("click", function () {
    $("#modal2").attr("class", "modal");
})

//The set default function is called as the page loads.
setDefaults();




