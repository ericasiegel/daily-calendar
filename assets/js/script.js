let date = moment().format('MMMM Do YYYY, h:mm:ss a');


let $todaysDate = $("#currentDay");
$todaysDate.text(date);

let tasks = [];

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        nine: [],
        ten: [],
        eleven: [],
        twelve: [],
        thirteen: [],
        fourteen: [],
        fifteen: [],
        sixteen: [],
        seventeen: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, list);
      });
    });
  };

  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  $(".task-group").on("click", function) {
    var createTask = function(taskText) {
        // create elements that make up a task item
        var taskLi = $("<p>").addClass("list-group-item");
        var taskP = $("<textarea>")
          .addClass("m-1")
          .text(taskText);
      
        // append span and p element to parent li
        taskLi.append(taskSpan, taskP);
      
        // check due date
        auditTask(taskLi);
      
      
        // append to ul list on the page
        $("#task-" + taskList).append(taskLi);
      };
  };

 