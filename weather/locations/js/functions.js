'use strict';
/****************************************************************************
*  Weather Site JavaScript Functions
*****************************************************************************/
console.group('Javascript');

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    //Last modified function
      setDate();

    //menu button for small screens
      //on click of element, enable/disable menu
      const menuButton = document.querySelector("#menu-button");
      menuButton.addEventListener('click', responsiveMenu);

    //Set Temps function
      //variables required by function
      let current = 31;
      let low = 22;
      let high = 35;
      //call setTemps function
      setTemps(current, low, high);

    //Set Wind function
      //variables required by function
      let wind = 10.98
      let gust = 24
      //call setWind function
      setWind(wind, gust);

    //Wind Chill
      //Variables for windchill function
      let temp = current;
      let speed = wind;
      //call windchill
      buildWC(speed, temp);

    //Time Indicator
      //variables for Time Indicator
      let hour = "10";
      timeIndicator(hour);

    //getCondition and ChangeSummaryImage
      //set variables 
      let curCondition = "snOw"
      getCondition(curCondition);

  })

//variables for responsive menu
var mobileMenuClicks = 0;

/****************************************************************************
 * Toggle between adding and removing the "responsive" class to the navbar
 * when the user clicks on the icon 
 ****************************************************************************/
function responsiveMenu() {
  //how many times responive menu used
  if (mobileMenuClicks == 0)
    console.groupCollapsed("Times Mobile Menu Toggled");
    mobileMenuClicks += 1;
    console.log(mobileMenuClicks);
  //declare variables
  const x = document.getElementById("navbar");
  const y = document.getElementById("footer");
  //if the buttun is tapped and the components are hidden, show them
  if (x.className === "hidden") {
    x.className = "shown";
    y.className = "large-footer";
  }
  //if the items are already shown, hide them 
  else {
    x.className = "hidden";
    y.className = "small-footer";
  }
} 


/****************************************************************************
 * set the date that the page was last updated at the bottom of the page
 ****************************************************************************/
function setDate() {
  console.group('Page Last Modified');

  //declare variables and set them as the dates I am going to use
  const current = new Date();
  const modified = new Date(document.lastModified);

  // get the proper variables set up for displaying date
    //current dates
    const cYear = current.getFullYear();

    //modified dates
    const mYear = modified.getFullYear();
    const mMonth = modified.getMonth() + 1;
    const mDay = modified.getDate();
    const mHour = modified.getHours();
    const mMinute = modified.getMinutes();
    const mSecond = modified.getSeconds();

    //change the copyright year to the current year
    document.getElementById("currentyear").innerHTML = cYear;

    document.getElementById("modified").innerHTML = mMonth + '/' 
    + mDay + '/' + mYear + ' ' + mHour + ':' + mMinute + '.' + mSecond;

  console.log(`${modified}`);
  console.groupEnd();
}

function setTemps(current, low, high)
{
  console.group("Initial Tempures");

  //get the elements holding the relevant information
  let currentElement = document.getElementById("temp");
  let lowElement = document.getElementById("low");
  let highElement = document.getElementById("high");

  //set the temps
  currentElement.innerHTML = current;
  console.log(`Current Temp is set to ${current}`);
  
  lowElement.innerHTML = low;
  console.log(`Low Temp set to ${low}`);
  
  highElement.innerHTML = high;
  console.log(`High Temp is set to ${high}`);
  console.groupEnd();
}

function setWind(speed, gust)
{
  console.group("Initial Tempures");

  //get the elements holding the relevant information
  let speedElement = document.getElementById("displayedWind");
  let gustElement = document.getElementById("displayedGusts");

  //set the winds
  speedElement.innerHTML = speed;
  console.log(`Wind Speed is set to ${speed}`);
  
  gustElement.innerHTML = gust;
  console.log(`Current Gusts are set to ${gust}`);
  console.groupEnd();
}

/****************************************************************************
 * Calculate the windchill temperature
 ****************************************************************************/
function buildWC(speed, temp)
{
  console.groupCollapsed("Wind Chill Function");

  //get the element holding the feels like temp
  let feelTemp = document.getElementById('feelTemp');

	// Compute windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
  + 0.4275 * temp * Math.pow(speed, 0.16);

	console.log(`Raw Wind Chill:\n${wc}`);
 
	// Round the answer down to integer
	wc = Math.floor(wc);
 
	// If chill is greater than temp, return the temp
	wc = (wc > temp)?temp:wc;
 
	// Display the windchill
  console.log(`Rounded Wind Chill:\n${wc}`);
  
  //put the result in the document
  feelTemp.innerHTML = wc;

  console.groupEnd('\n');
	return wc;
}

/****************************************************************************
 * Implements the time indicator int the page
 * **************************************************************************/
function timeIndicator(hour){
  console.groupCollapsed("Time Indicators");

  // Find all "slider" classes and remove them
  let x = document.querySelectorAll(".slider");
  for (let item of x) {
    console.log(`slider found:\n${item}`);
    item.classList.remove("slider");
  }

  // Find all hours that match the parameter and add the "slider" class
  let hr = document.querySelectorAll(".i"+ hour);
  for (let item of hr){
    item.classList.add("slider");
  }
  
  console.groupEnd();
}

/****************************************************************************
 * Determine the condition
 ****************************************************************************/
function getCondition(conditionPhrase)
{
  //start console group for conditions
  console.group("Current Condition");

	//make the phrase lower case
	let phrase = conditionPhrase.toLowerCase();

	switch (true) {

    //is it rain?
		case phrase.includes("rain"):
		case phrase.includes("sprinkl"):
		case phrase.includes("pour"):
		case phrase.includes("wet"):
		case phrase.includes("thunder"):
			console.log("rain");
      changeSummaryImage("rain");
      break;

    //is it snow?
		case phrase.includes("snow"):
		case phrase.includes("ice"):
		case phrase.includes("bliz"):
		case phrase.includes("freez"):
			console.log("snow");
      changeSummaryImage("snow");
      break;

    //is it cloudy?
		case phrase.includes("clouds"):
		case phrase.includes("overcast"):
		case phrase.includes("coverage"):
			console.log("clouds");
      changeSummaryImage("clouds");
      break;
      
    //is it foggy?
		case phrase.includes("fog"):
		case phrase.includes("haze"):
		case phrase.includes("film"):
			console.log("fog");
      changeSummaryImage("fog");
      break;

    //anything else has to be clear
		default:
			console.log("clear");
      changeSummaryImage("clear");
  }
}

/****************************************************************************
 * Change the info in the summary box
 ****************************************************************************/
function changeSummaryImage(condition)
{
	//get the html elements
	const summaryImage = document.getElementById("weather-image");

	//set the class attribute for the backgropund image
	summaryImage.setAttribute("class", condition);

  //send info to console
  console.log("the background image has been set to " + condition);
  console.groupEnd();
}