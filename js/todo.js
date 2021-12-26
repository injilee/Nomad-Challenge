'use strict';

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
const btn = toDoList.querySelector("button");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(jium){
    const li = jium.target.parentElement;
    toDos = toDos.filter(todo=> todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❤️";
    button.addEventListener("click", delToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

