let hourlyTask = $("textarea");
let dayHour = moment();
let currentHour;
let hourText = $(".text");
let tasks;

let todaysDate = function() {
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    let $todaysDate = $("#currentDay");
    $todaysDate.text(date);
};

$(document).ready(function() {
    todaysDate();
    setInterval(todaysDate, 100);
});

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
    tasks = []
}

let dayTask = function() {
    $.each(tasks, function(i) {
        if (tasks[i]) {
            hourlyTask[i].value = tasks[i];
        }
    })
};

let setTasks = function() {
    var tasks = {};
    $(".text").each(function() {
        tasks[this.id] = this.value;
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));

};

let hourlyTaskUpdate = function() {
    

    $(hourText).removeClass("past present future");

    $.each(hourText, function(scheduleHour) {
        if (scheduleHour < (dayHour.hour() - 9)) {
            $(this).addClass("past");
        }
        else if (scheduleHour > (dayHour.hour() - 9)) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    });
    currentHour = dayHour.hour();
};

setInterval(function () {
    dayHour = moment();
    if (currentHour < dayHour.hour()) {
        hourlyTaskUpdate();
    }
  }, 1000);



//  console.log(hourlyTaskUpdate);

hourlyTaskUpdate();
dayTask();
$(".saveBtn").click(setTasks);
