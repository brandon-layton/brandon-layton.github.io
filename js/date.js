/****************************************************************************
 * WARNING THIS CODE IS IN "functions.js" USE THAT INSTEAD OF THIS
 * THIS IS DEPRECATED AND IS NOT UPDATED ANYMORE
 ****************************************************************************/

//declare variables and set them as the dates I am going to use
var current = new Date();
var modified = new Date(document.lastModified);

// get the proper variables set up for displaying date
    //current dates
    var cYear = current.getFullYear();

    //modified dates
    var mYear = modified.getFullYear();
    var mMonth = modified.getMonth() + 1;
    var mDay = modified.getDate();
    var mHour = modified.getHours();
    var mMinute = modified.getMinutes();
    var mSecond = modified.getSeconds();

//change the copyright year to the current year
document.getElementById("currentyear").innerHTML = cYear;

document.getElementById("modified").innerHTML = mMonth + '/' + mDay + '/' + mYear + ' ' + mHour + ':' + mMinute + '.' + mSecond;