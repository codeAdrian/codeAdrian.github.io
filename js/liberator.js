var timer;
var alarm = new Audio('audio/alarm.mp3');

window.onload = function() {
    setInitialTimerValue(getCurrentTime());
    calculateApprox(getFormData(), getCurrentTime());
};

function enableTimer() {
    var formTime = getFormData();
    var formTime_hours = formTime[0];
    var formTime_minutes = formTime[1];

    if(formTime_minutes.charAt(0) == "0") {
        formTime_minutes=formTime_minutes.substr(1);
    }

    if(formTime_hours.charAt(0) == "0") {
        formTime_hours=formTime_hours.substr(1);
    }

    document.getElementById("message").style.display = "block";

    calculateApprox(formTime, getCurrentTime());

    timer = setInterval(function(){checkTimeAndAlert(formTime_hours, formTime_minutes)}, 1000);

}

function setInitialTimerValue(currentTime){
    var currentTime_hours = currentTime[0];
    var currentTime_minutes = currentTime[1];

    document.getElementById("form_hours").value = currentTime_hours ;
    document.getElementById("form_minutes").value = currentTime_minutes;
}

function checkTimeAndAlert(formTime_hours, formTime_minutes){
    var currentTime = getCurrentTime();
    var currentTime_hours = currentTime[0];
    var currentTime_minutes = currentTime[1];

    if(currentTime_hours == formTime_hours && currentTime_minutes == formTime_minutes ) {
        if(document.getElementById("alarm").checked == true) alarm.play();
        alert("Time to return to the real world, my love. Be happy and mindful 😘");
        clearInterval(timer);
    }
}

function getCurrentTime() {
    var date = new Date;
    return [date.getHours(), date.getMinutes()];
}

function getFormData() {
    var form_hours = document.getElementById("form_hours").value;
    var form_minutes = document.getElementById("form_minutes").value;
    return [form_hours, form_minutes];
}

function calculateApprox(formTime, currentTime) {
    var currentTime_hours = currentTime[0];
    var currentTime_minutes = currentTime[1];
    var formTime_hours = formTime[0];
    var formTime_minutes = formTime[1];

    var diff_hours = formTime_hours - currentTime_hours;
    var diff_minutes = formTime_minutes - currentTime_minutes;

    if (diff_minutes<0) {
        diff_hours = diff_hours - 1;
        diff_minutes = 60 + diff_minutes;
    }

    if (diff_hours<0) diff_hours = 24 + diff_hours;

    document.getElementById("approx").innerHTML = "You plan on spending <b>" + diff_hours + " hours and " + diff_minutes + " minutes </b> browsing the Internet.";
}