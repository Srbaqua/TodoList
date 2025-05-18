const TodoList = [];
function addTodo(){
const inputElement = document.querySelector('.todo');
TodoList.push(inputElement.value);
inputElement.value = '';

var taskList = '';
for(let i = 0;i<TodoList.length;i++){
    taskList+=`<p>${TodoList[i]}<p>`;
}
document.querySelector('.show-Task').innerHTML = taskList;

}