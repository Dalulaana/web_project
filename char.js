
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

//to add a task to the list
function addTask() 
{
    const taskText = taskInput.value.trim();
    if (taskText !== "") 
    {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        
        li.addEventListener("click", function () 
        {
            li.classList.toggle("completed");
        });


        //create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        li.appendChild(deleteButton);


        //add the delete button to the list item
        deleteButton.addEventListener("click", function () 
        {
            taskList.removeChild(li);
        });
    }
}

addTaskButton.addEventListener("click", addTask);
    
// Add a keydown event listener to handle the "Enter" key press
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// for adv list
const columns = document.querySelectorAll('.colunm');
const onDragOver = (event) => {
    event.preventDefault();
}
const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    event.target.appendChild(draggedCard);
}

columns.forEach((colunm) => {
    colunm.ondragover = onDragOver;
    colunm.ondrop = onDrop
})

// for characters
const cards = document.querySelectorAll('.card');
const onDragStart = (event) => {
    event.dataTransfer.setData('id', event.target.id);
    setTimeOut (() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}
const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
}

cards.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})