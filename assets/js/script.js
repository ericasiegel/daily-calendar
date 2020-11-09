let hourlyTask = $("textarea");
let hour = moment();
let tasks;

let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let $todaysDate = $("#currentDay");
$todaysDate.text(date);

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

dayTask();
$(".saveBtn").click(setTasks);
