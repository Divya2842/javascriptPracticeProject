let inputField = document.getElementById('inputField');
let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let ul = document.createElement('ul'); // Create an un ordered list element

addToButton.addEventListener('click', function() {
    var taskText = inputField.value.trim(); // Get trimmed input value

    if (taskText === '') {
        alert('Please enter a task to add.');
        return; // Exit the function early if input is empty
    }

    var listItem = document.createElement('li'); // Create a list item for each todo
    //var paragraph = document.createElement('p');
    listItem.innerText = taskText;
    
    //listItem.appendChild(paragraph); // Add the paragraph to the list item
    ul.appendChild(listItem); // Add the list item to the ordered list
    toDoContainer.appendChild(ul); // Add the ordered list to the container
    
    inputField.value = ""; // Clear the input field
    
    listItem.addEventListener('click', function() {
        listItem.style.textDecoration = 'line-through';
    });
    
    listItem.addEventListener('dblclick', function() {
        ul.removeChild(listItem); // Remove the list item from the ordered list
    });
});
