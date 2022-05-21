// Put the day at the top of the page
$("#currentDay").text(moment());

// Grabs the saveBtn from the html and saves it as a variable
let saveBtn = $('.saveBtn');

// Declaring the hours to compare to the moment.js hour
let hour8 = 8;
let hour9 = 9;
let hour10 = 10;
let hour11 = 11;
let hour12 = 12;
let hour1 = 13;
let hour2 = 14;
let hour3 = 15;
let hour4 = 16;
let hour5 = 17;
let hour6 = 18;

// Uses moment.js to get the current hour
// Uses 24 hour
let currentHour = moment().format('H');

// Conditional statements to determine if the hour block is in the past,
// future, or present.
if (currentHour > hour8) {
    $('#hour8Text').addClass("past");
} else if (currentHour < hour8) {
    $('#hour8Text').addClass('future');
} else {
    $('#hour8Text').addClass('present');
}

if (currentHour > hour9) {
    $('#hour9Text').addClass("past");
} else if (currentHour < hour9) {
    $('#hour9Text').addClass('future');
} else {
    $('#hour9Text').addClass('present');
}

if (currentHour > hour10) {
    $('#hour10Text').addClass("past");
} else if (currentHour < hour10) {
    $('#hour10Text').addClass('future');
} else {
    $('#hour10Text').addClass('present');
}

if (currentHour > hour11) {
    $('#hour11Text').addClass("past");
} else if (currentHour < hour11) {
    $('#hour11Text').addClass('future');
} else {
    $('#hour11Text').addClass('present');
}

if (currentHour > hour12) {
    $('#hour12Text').addClass("past");
} else if (currentHour < hour12) {
    $('#hour12Text').addClass('future');
} else {
    $('#hour12Text').addClass('present');
}

if (currentHour > hour1) {
    $('#hour1Text').addClass("past");
} else if (currentHour < hour1) {
    $('#hour1Text').addClass('future');
} else {
    $('#hour1Text').addClass('present');
}

if (currentHour > hour2) {
    $('#hour2Text').addClass("past");
} else if (currentHour < hour2) {
    $('#hour2Text').addClass('future');
} else {
    $('#hour2Text').addClass('present');
}

if (currentHour > hour3) {
    $('#hour3Text').addClass("past");
} else if (currentHour < hour3) {
    $('#hour3Text').addClass('future');
} else {
    $('#hour3Text').addClass('present');
}

if (currentHour > hour4) {
    $('#hour4Text').addClass("past");
} else if (currentHour < hour4) {
    $('#hour4Text').addClass('future');
} else {
    $('#hour4Text').addClass('present');
}

if (currentHour > hour5) {
    $('#hour5Text').addClass("past");
} else if (currentHour < hour5) {
    $('#hour5Text').addClass('future');
} else {
    $('#hour5Text').addClass('present');
}

if (currentHour > hour6) {
    $('#hour6Text').addClass("past");
} else if (currentHour < hour6) {
    $('#hour6Text').addClass('future');
} else {
    $('#hour6Text').addClass('present');
}

//On saveBtn click it will save the text for the block to local storeage
saveBtn.on("click", function() {

    // Text grabs the text present in the timeblock
    let text = $(this).siblings(".text").val();
    // Time grabs the parent ID which would be hour-#
    let time = $(this).parent().attr("id");

    // Saves the text and parent ID to local storage
    localStorage.setItem(time, text);
})

// Gets the texts from local storage and sets it to the block
$("#hour8Text").val(localStorage.getItem("hour-8"));
$("#hour9Text").val(localStorage.getItem("hour-9"));
$("#hour10Text").val(localStorage.getItem("hour-10"));
$("#hour11Text").val(localStorage.getItem("hour-11"));
$("#hour12Text").val(localStorage.getItem("hour-12"));
$("#hour1Text").val(localStorage.getItem("hour-1"));
$("#hour2Text").val(localStorage.getItem("hour-2"));
$("#hour3Text").val(localStorage.getItem("hour-3"));
$("#hour4Text").val(localStorage.getItem("hour-4"));
$("#hour5Text").val(localStorage.getItem("hour-5"));
$("#hour6Text").val(localStorage.getItem("hour-6"));