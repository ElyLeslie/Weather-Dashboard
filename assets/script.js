var SearchBtn = $('#SearchBtn');
var Input = document.querySelector('#search-city');
var CityName= $('#City-Name-Date');
var allBtns = $("#allBtns");
var area = document.querySelector("#location");
var Temp = $("#temp");
var Wind = $("#wind");
var Humid = $("#humidity");
var APIKey = 'd3d61bc2f5c80e788e8cd7ab25a871a9';





var allCities = []



// Fetch the user input value to add to the URL code. :D 


SearchBtn.on("click", function (event)
{
  
  var userinput = Input.value
  var currentURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userinput + '&appid=' + APIKey + "&units=imperial"
  localStorage.setItem("Input", JSON.stringify(allCities));
  userinput = JSON.parse(localStorage.getItem("Input"));
  console.log(userinput);

  


    fetch(currentURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {


     var date = new Date(data.dt * 1000).toLocaleDateString("en-US")
     var citiesLabel = (data.name)

     console.log(data);
     Temp.text(data.main.temp + "°")
     Wind.text(data.wind.speed + "MPH")
     Humid.text(data.main.humidity + "%")
     
     CityName.text(data.name + " " + date)

      
      searchHistory()
     return

    });

   
  }) 


function searchHistory() {
  allBtns.children().remove()

  for(var i = 0; i <allCities.length; i++) {

    

    var choiceEl = $('<button>');
    choiceEl.text(allCities[i]);
    choiceEl.attr('id', 'everyButton')
    choiceEl.addClass('col-12 w-50 btn btn-primary m-2');
    allBtns.append(choiceEl)

    
  }


  fetch(fiveDayURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {

   


      var date = new Date(data.dt * 1000).toLocaleDateString("en-US")
      
 
      var fiveDayURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userinput + '&appid=' + APIKey + "&units=imperial"


       
      return
 

  }

  )
  
  //This button should call our fetch function, we need to tie the click action to the correct button.

}




