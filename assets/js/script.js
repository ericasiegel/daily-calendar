let hourlyTask = $("textarea");
let hour = moment();
let tasks;

let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let $todaysDate = $("#currentDay");
$todaysDate.text(date);


$.each(hourlyTask, function(){
    $(this).value = "";
});

let eachTask = function() {
    $.each(tasks, function(i) {
       if (tasks[i]) {
           hourlyTask[i].value = tasks[i].task
       }
    })
};

let setTasks = function() {
    let hourlyTask = JSON.parse(localStorage.getItem("hourlyTask") || "[]");
    hourlyTask.push(tasks)
    localStorage.setItem("hourlyTask", JSON.stringify(hourlyTask));
};

$(".saveBtn").on("click", setTasks);
