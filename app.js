var input = document.querySelector ('#input')
var Todo = []
var list = document.querySelector ('#item-div')


// edit todo render function
function rendereditTodo(index){
    
    list.innerHTML =''

    for (var i = 0; i < Todo.length; i++){

        if (i === index) {
            
            list.innerHTML += `
            <div class='list-main-div d-flex justify-content-start column-gap-3'>
                <input type="text" placeholder="Enter Item" class="text-start ps-2 w-75 border rounded" id="add-input">
                <button onclick="addeditTodo(${i})" class="w-25 border text-white bg-gradient pt-2 pb-2 replace-todo-button rounded">Replace Todo</button>
            </div>`
            continue
        }
    
            list.innerHTML += `
            <div class='list-main-div d-flex justify-content-start column-gap-3'>
                <div class='p-div bg-white rounded d-flex justify-content-start align-items-center w-75 border'>
                    <p class='ps-2 w-100'>${i+1}. ${Todo[i]}</p>
                </div>

                <div class='button-div d-flex justify-content-center align-items-center w-25 column-gap-2'>
                    <div>
                        <button onclick='deleteitem(${i})' class='delete-button border text-white px-2 pt-2 pb-2 rounded'>delete</button>
                    </div>
                
                    <div>
                        <button onclick='editItem(${i})' class='edit-button border text-white px-3 pt-2 pb-2 rounded'>edit</button>
                    </div>
                </div>
            </div>`
        }
}


// Render todo
function renderTodo (){
    
    list.innerHTML = ''
    
    for (var i = 0; i < Todo.length; i++){
        list.innerHTML += `
        <div class='list-main-div d-flex justify-content-start column-gap-3'>
            <div class='p-div bg-white rounded d-flex justify-content-start align-items-center w-75 border'>
                <p class='ps-2 w-100'>${i+1}. ${Todo[i]}</p>
            </div>

            <div class='button-div d-flex justify-content-center align-items-center w-25 column-gap-2'>
                <div>
                    <button onclick='deleteitem(${i})' class='delete-button border text-white px-2 pt-2 pb-2 rounded'>delete</button>
                </div>
                
                <div>
                    <button onclick='editItem(${i})' class='edit-button border text-white px-3 pt-2 pb-2 rounded'>edit</button>
                </div>
            </div>
        </div>`
    }
}

// function add todo
function addTodo () {
    
    Todo.push (input.value)
    
    renderTodo()

    input.value =''
}


// function delete item
function deleteitem (index){
    
    Todo.splice (index, 1)
    
    renderTodo()
}

// function edit item
function editItem (index) {
    
    rendereditTodo(index)
    
}

// function add edit todo
function addeditTodo(index){
    
    var replacedValue = document.querySelector ('#add-input')
    
    Todo.splice (index, 1, replacedValue.value)

    renderTodo()

}