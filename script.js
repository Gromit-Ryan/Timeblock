$("#currentDay").text(moment());

let saveBtn = $('.saveBtn');

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

let currentHour = moment().format('H');

console.log(currentHour);


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

saveBtn.on("click", function() {
    let time = $(this).siblings(".time").text();
    let hourText = $(this).siblings(".text").val();

    localStorage.setItem(time, hourText);
})

function loadPlanner() {
    $(".time").each(function() {
        let currentHour = $(this).text();
        let currentText = localStorage.getItem(currentHour);

        if(currentText !== null) {
            $(this).siblings(".text")
        }
    })
}

$("#hour8Text").val(localStorage.getItem("hour8"));
$("#hour9Text").val(localStorage.getItem("hour9"));
$("#hour10Text").val(localStorage.getItem("hour10"));
$("#hour11Text").val(localStorage.getItem("hour11"));
$("#hour12Text").val(localStorage.getItem("hour12"));
$("#hour1Text").val(localStorage.getItem("hour1"));
$("#hour2Text").val(localStorage.getItem("hour2"));
$("#hour3Text").val(localStorage.getItem("hour3"));
$("#hour4Text").val(localStorage.getItem("hour4"));
$("#hour5Text").val(localStorage.getItem("hour5"));
$("#hour6Text").val(localStorage.getItem("hour6"));