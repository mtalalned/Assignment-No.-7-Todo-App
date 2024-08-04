var input = document.querySelector ('#input')
var Todo = []
var list = document.querySelector ('#item-div')


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


function addTodo () {
    
    Todo.push (input.value)
    
    renderTodo()

    input.value =''
}

function deleteitem (index){
    
    Todo.splice (index, 1)
    
    renderTodo()
}

function editItem (index) {
    
    var inputItem = prompt ('Enter Item')

    Todo.splice (index , 1 , inputItem)

    renderTodo()
}