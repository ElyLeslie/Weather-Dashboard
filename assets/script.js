var SearchBtn = $('#SearchBtn');
var Input = document.querySelector('#search-city');
var CityName= $('#City-Name-Date');
var allBtns = $("#allBtns");
var area = document.querySelector("#location");
var Temp = $("#temp");
var Wind = $("#wind");
var Humid = $("#humidity");
var APIKey = 'd3d61bc2f5c80e788e8cd7ab25a871a9';
var tempOne = $("#tempdayOne");
var tempTwo = $("#tempdayTwo");
var tempThree = $("#tempdayThree");
var tempFour = $("#tempdayFour");
var tempFive = $("#tempdayFive");
var windOne = $("#winddayOne");
var windTwo = $("#winddayTwo");
var windThree = $("#winddayThree");
var windFour = $("#winddayFour");
var windFive = $("#winddayFive");
var humidOne = $("#humiditydayOne");
var humidTwo = $("#humiditydayTwo");
var humidThree = $("#humiditydayThree");
var humidFour = $("#humiditytempdayFour");
var humidFive = $("#humiditydayFive");
var everyButton = $("#everyButton");


var dateOne = $("#dayOneDate");
var dateTwo = $("#dayTwoDate");
var dateThree = $("#dayThreeDate");
var dateFour = $("#dayFourDate");
var dateFive = $("#dayFiveDate");




var allCities = $(JSON.parse(localStorage.getItem("Input")));



// Fetch the user input value to add to the URL code. :D 


SearchBtn.on("click", function (event)
{
  
  var userinput = Input.value
  var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userinput + '&appid=' + APIKey + "&units=imperial"
  var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + userinput + '&appid=' + APIKey + "&units=imperial"
  allCities.push(userinput);
  localStorage.setItem("Input", JSON.stringify(allCities));
  userinput = JSON.parse(localStorage.getItem("Input"));
  console.log(userinput);

  
  searchHistory();

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

      
     return

    });

    fetch(fiveDayURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data2) {


    tempOne.text(data2.list[7].main.temp + "°")
    tempTwo.text(data2.list[15].main.temp + "°")
    tempThree.text(data2.list[23].main.temp + "°")
    tempFour.text(data2.list[31].main.temp + "°")
    tempFive.text(data2.list[39].main.temp + "°")
    windOne.text(data2.list[7].wind.speed + " MPH")
    windTwo.text(data2.list[15].wind.speed + " MPH")
    windThree.text(data2.list[23].wind.speed + " MPH")
    windFour.text(data2.list[31].wind.speed + " MPH")
    windFive.text(data2.list[39].wind.speed + " MPH")
    humidOne.text(data2.list[7].main.humidity + "%")
    humidTwo.text(data2.list[15].main.humidity + "%")
    humidThree.text(data2.list[23].main.humidity + "%")
    humidFour.text(data2.list[31].main.humidity + "%")
    humidFive.text(data2.list[39].main.humidity + "%")

      //var date = new Date(data2.dt * 1000).toLocaleDateString("en-US")
      
 

       console.log(data2)
      
       

      return
 
    
  }

  )
  
   
  }) 


function searchHistory() {
  
  allBtns.children().remove()
  
  for(var i = 0; i <allCities.length; i++) {

    

    var choiceEl = $('<button>');
    choiceEl.text(allCities[i]);
    console.log(allCities[i].toString());
    choiceEl.attr('id', 'everyButton')
    choiceEl.addClass('col-12 w-50 btn btn-primary m-2');
    allBtns.append(choiceEl)

    
  }
 

  
  
  //This button should call our fetch function, we need to tie the click action to the correct button.

}

allBtns.on("click", "#everyButton", function (event)
{

  console.log("clicked")
  
  var userinput = $(this).text();
  var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userinput + '&appid=' + APIKey + "&units=imperial"
  var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + userinput + '&appid=' + APIKey + "&units=imperial"
  
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

      
     return

    });

    fetch(fiveDayURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data2) {

    var date1 = new Date(data2.list[7].dt * 1000).toLocaleDateString("en-US")
    var date2 = new Date(data2.list[15].dt * 1000).toLocaleDateString("en-US")
    var date3 = new Date(data2.list[23].dt * 1000).toLocaleDateString("en-US")
    var date4 = new Date(data2.list[31].dt * 1000).toLocaleDateString("en-US")
    var date5 = new Date(data2.list[39].dt * 1000).toLocaleDateString("en-US")

    dateOne.text(date1);
    dateTwo.text(date2);
    dateThree.text(date3);
    dateFour.text(date4);
    dateFive.text(date5);

    tempOne.text(data2.list[7].main.temp + "°")
    tempTwo.text(data2.list[15].main.temp + "°")
    tempThree.text(data2.list[23].main.temp + "°")
    tempFour.text(data2.list[31].main.temp + "°")
    tempFive.text(data2.list[39].main.temp + "°")
    windOne.text(data2.list[7].wind.speed + " MPH")
    windTwo.text(data2.list[15].wind.speed + " MPH")
    windThree.text(data2.list[23].wind.speed + " MPH")
    windFour.text(data2.list[31].wind.speed + " MPH")
    windFive.text(data2.list[39].wind.speed + " MPH")
    humidOne.text(data2.list[7].main.humidity + "%")
    humidTwo.text(data2.list[15].main.humidity + "%")
    humidThree.text(data2.list[23].main.humidity + "%")
    humidFour.text(data2.list[31].main.humidity + "%")
    humidFive.text(data2.list[39].main.humidity + "%")

      //var date = new Date(data2.dt * 1000).toLocaleDateString("en-US")
      
 

       
      
       

      return
 
    
  }

  )
   
  }) 




