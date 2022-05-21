var displayTime = document.querySelector('#currentDay');

var currentTime = moment();

var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 1;
var hour2 = 2;
var hour3 = 3;
var hour4 = 4;
var hour5 = 5;
var hour6 = 6;

var currentHour = moment().format('H');


if (currentHour > hour8) {
    $('#hour8Text').addClass("future");
} else if (currentHour < hour8) {
    $('#hour8Text').addClass('past');
} else {
    $('#hour8Text').addClass('present');
}

if (currentHour > hour9) {
    $('#hour9Text').addClass("future");
} else if (currentHour < hour9) {
    $('#hour9Text').addClass('past');
} else {
    $('#hour9Text').addClass('present');
}

if (currentHour > hour10) {
    $('#hour10Text').addClass("future");
} else if (currentHour < hour10) {
    $('#hour10Text').addClass('past');
} else {
    $('#hour10Text').addClass('present');
}

if (currentHour > hour11) {
    $('#hour11Text').addClass("future");
} else if (currentHour < hour11) {
    $('#hour11Text').addClass('past');
} else {
    $('#hour11Text').addClass('present');
}

if (currentHour > hour12) {
    $('#hour12Text').addClass("future");
} else if (currentHour < hour12) {
    $('#hour12Text').addClass('past');
} else {
    $('#hour12Text').addClass('present');
}

if (currentHour > hour1) {
    $('#hour1Text').addClass("future");
} else if (currentHour < hour1) {
    $('#hour1Text').addClass('past');
} else {
    $('#hour1Text').addClass('present');
}

if (currentHour > hour2) {
    $('#hour2Text').addClass("future");
} else if (currentHour < hour2) {
    $('#hour2Text').addClass('past');
} else {
    $('#hour2Text').addClass('present');
}

if (currentHour > hour3) {
    $('#hour3Text').addClass("future");
} else if (currentHour < hour3) {
    $('#hour3Text').addClass('past');
} else {
    $('#hour3Text').addClass('present');
}

if (currentHour > hour4) {
    $('#hour4Text').addClass("future");
} else if (currentHour < hour4) {
    $('#hour4Text').addClass('past');
} else {
    $('#hour4Text').addClass('present');
}

if (currentHour > hour5) {
    $('#hour5Text').addClass("future");
} else if (currentHour < hour5) {
    $('#hour5Text').addClass('past');
} else {
    $('#hour5Text').addClass('present');
}

if (currentHour > hour6) {
    $('#hour6Text').addClass("future");
} else if (currentHour < hour6) {
    $('#hour6Text').addClass('past');
} else {
    $('#hour6Text').addClass('present');
}