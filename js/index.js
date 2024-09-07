// setTimeout Misoli

// let count = 0;
// let intervalId;

// function incrementCount() {
//   count++;
//   console.log(`Count: ${count}`);
//   if (count >= 5) {
//     clearInterval(intervalId);
//     console.log("Interval to'xtatildi!");
//   }
// }
// let timeoutId = setTimeout(() => {
//   intervalId = setInterval(incrementCount, 1000);
// }, 1000);

// setInterval Misoli

// function displayTime() {
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// }


// const intervalId = setInterval(displayTime, 1000);


// setTimeout(() => {
//     clearInterval(intervalId);
// }, 10000);


document.addEventListener('DOMContentLoaded', function() {
    const addTodoButton = document.getElementById('addTodoButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const errorMessage = document.getElementById('error-message');
    const clearAllButton = document.getElementById('clearAllButton');

    function updateTodoCount() {
        const todoCount = todoList.children.length;
        document.getElementById('todoCount').textContent = `Sizning ro'yxatda ${todoCount} ta vazifa bor.`;
    }

    addTodoButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();

        if (todoText.length < 5) {
            errorMessage.textContent = '5 ta xarifadan kam';
            return;
        }

        errorMessage.textContent = '';

        if (todoText) {
            const li = document.createElement('li');
            li.textContent = todoText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.className = 'remove';
            removeButton.addEventListener('click', function() {
                li.remove();
                updateTodoCount(); 
            });

            li.appendChild(removeButton);
            todoList.appendChild(li);
            todoInput.value = '';
            updateTodoCount(); 
        }
    });

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoButton.click();
        }
    });

    clearAllButton.addEventListener('click', function() {
        todoList.innerHTML = '';  
        updateTodoCount(); 
    });


    updateTodoCount();
});
