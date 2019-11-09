// This file controls the front-end of the .html files for the devState project (project 2 Vanderbilt / Trilogy FSF - July 2019 Cohort)
$( document ).ready(function() {

// HOME PAGE - LOGIN FORM ------------------------------------------------------------------ //
$('#devStateLoginBtn').on('click',function(){
    var userId = document.getElementById('userId').value;
    var userPassword = document.getElementById('userPassword').value;
    localStorage.setItem('projectOwner', userId);
    localStorage.setItem('userPassword', userPassword);    
});

// PROJECT PAGE - CREATE PROJECT FORM ----------------------------------------------------- //
/* -- This block of code triggers the "Create a Project Modal on the home page - SLF" */
$('.createProjectBtn').on('click', function() {
    var modal = $('.modalOverlay');
    $(modal).show(500);
});

/* -- I'm setting an incrementing variable to '0' so I can store more than one property/value set in local storage. Each set of values will be numbered 0 ++ - SLF -- */
var i = 0;

/* -- Once the modal fires, and after users enter their data, the inputs are assigned to variables, and stored to local storage. - SLF -- */
$('.saveProject').on('click', function() {
    //event.preventDefault();
    var modal = $('.modalOverlay');
    $(modal).css('display','none');
    var newProject = document.getElementById('projectNameInput').value;
    var contributor = document.getElementById('projectContributor').value;
    
 /* Since the Database isn't set up yet, I am storing the user input into local storage. This will allow retreival of the data from page to page,
    while also making flipping to the database simpler - SLF */   
    i++
    localStorage.setItem('newProject'+i, newProject);
    localStorage.setItem('newContributor'+i, contributor); 
});

// PROJECT PAGE - ADD A TASK FORM ----------------------------------------------------- //
function getUserId () {
    var userNameDisplay = localStorage.getItem('projectOwner');
    document.getElementById('userName').innerHTML = userNameDisplay;
    var projectName = localStorage.getItem('newProject1');
    document.getElementById('projectNameHeading').innerHTML = projectName;
}
getUserId();

var newTask = 1;
$('.saveTask').on('click', function() {
    newTask++;
    event.preventDefault();
    var newTaskWrap = document.getElementById('taskContainer');
    var newTaskName = document.getElementById('taskNameInput').value;
    var newTaskAssignee = document.getElementById('asignee').value;
    var newTaskDueDate = document.getElementById('taskDate').value;
    var newTaskStatus = document.getElementById('taskStatus').value;

    $(newTaskWrap).append('<div class="newTaskItem" id="newTaskItem'+ newTask +'"></div>');
    createNewTask = document.getElementById('newTaskItem'+ newTask +'')
    $(createNewTask).append('<h4>'+newTaskName+'</h4>');
    $(createNewTask).append('<p class="newTaskAsignee">'+newTaskAssignee+'</p>');
    $(createNewTask).append('<p class="newDueBy">'+newTaskDueDate+'</p>');
    $(createNewTask).append('<div class="taskStatus '+newTaskStatus+'">'+newTaskStatus+'</div>')

    localStorage.setItem('newTask'+newTask, newTaskName);
    localStorage.setItem('newTaskAssignee'+newTask, newTaskAssignee);
    localStorage.setItem('newTaskDueDate'+newTask, newTaskDueDate);
    localStorage.setItem('newTaskStatus'+newTask, newTaskStatus);

    if (newTask > 1) {
        $('.statusMessage').css('display','none');
    }
});



});

