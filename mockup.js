let todo = document.querySelector(".todo");
let todo_list = document.querySelector(".todo_list");
let done = document.querySelector(".done");
let toDone = document.querySelectorAll(".toDone");
let del = document.querySelector(".delete");

let moveTodo = function moveTodo(e){
    done.appendChild(e.target.parentNode)
    e.target.parentNode.removeChild(e.target)
}

todo.addEventListener("click",function(e){
    let dialouge = window.prompt("Do you want to add another item?")
    let newTodo = document.createElement("li")
    newTodo.innerHTML = `${dialouge} <button class="toDone"> > </button>`
    newTodo.querySelector(".toDone").addEventListener("click", (e)=>{moveTodo(e) })
    todo_list.appendChild(newTodo)
    todo_list = document.querySelector(".todo_list")
})

toDone.forEach(function(finish){
    finish.addEventListener("click", function(e){
        moveTodo(e)
    })
})

done.addEventListener("click", function(e){
    let doneItems = done.querySelectorAll("li")
    done.removeChild(doneItems[0])
})
