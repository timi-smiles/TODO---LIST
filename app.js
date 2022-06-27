// let inputField = document.querySelector(".input")
// let btnAdd = document.getElementById("btn1")
// let btnReset = document.querySelector(".btn_Reset")
// let ul = document.getElementById('todo-items-ul')


// function addToDo(e){
 
// }


// btnAdd.addEventListener("click", (e)=>{

//   if (inputField !== "") {
//     e.preventDefault();
//     inputField = inputField.value
//     console.log(inputField)
//     let listItems = document.createElement("li")
//     listItems.className = "todo-items"
//     ul.style.display = 'block'
//     listItems.append(inputField)

//     console.log(listItems)
//     ul.appendChild(listItems)

//      console.log(inputField);
//      console.log("add to do is working")
//      inputField =""
//   }
//   document.querySelector(".input").value = ""
// })


const form =document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

// if(todos){
//   todos.forEach((todo)=>{
//     addToDo(todo)
//   })
// }

const addToDo=(todo)=>{
  
  const todoText = input.value;
  if(todo){
    todoText =todo.text
  }
  // console.log(todoText)
  if(todoText){
    const todoEl = document.createElement("li");
    todoEl.className = "todo-Lis"
    todoEl.innerText = todoText;
    console.log(todoEl)

    todoEl.addEventListener("click", ()=>{
      todoEl.classList.toggle("completed")
      updateLS()
    })

    todoEl.addEventListener("contextmenu", ()=>{
      todoEl.remove()
      updateLS()
    })

    todosUL.appendChild(todoEl)
    input.value =''
    updateLS()
  }
}

function updateLS(){
  const todosEl = document.querySelectorAll(".todo-Lis")
const todos =[]


  todosEl.forEach((todoEl)=>{
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contain("completed")
    })
  })
  localStorage.setItem("todo", JSON.stringify(todos))
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  addToDo()
})