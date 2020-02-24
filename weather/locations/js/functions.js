'use strict';
/****************************************************************************
*  Weather Site JavaScript Functions
*****************************************************************************/
console.group('Javascript');

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    //call functions that need to be used on the loading of the page
    setDate();

    //Variables for windchill function
    let temp = 31;
    let speed = 5;
    //call windchill
    buildWC(speed, temp);


    })

/****************************************************************************
 * Toggle between adding and removing the "responsive" class to the navbar
 * when the user clicks on the icon 
 ****************************************************************************/
function responsiveMenu() {
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
  console.groupEnd('\n');
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
function timeIndicator(){
  
  return;
}