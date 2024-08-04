var input = document.querySelector ('#input')
var Todo = []
var list = document.querySelector ('ol')

function addTodo () {
    
    Todo.push (input.value)
    // console.log (Todo)
    list.innerHTML = ''
    
    for (var i = 0; i < Todo.length; i++){
        list.innerHTML += `<li> ${Todo[i]}
        <button class='delete-button border text-white'>Delete</button>
        <button class='Edit-button border text-white'>Edit</button>
        </li>`
    }

    input.value =''
}