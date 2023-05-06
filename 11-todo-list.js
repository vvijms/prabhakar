const TodoList=[];





function addTodo()
{
	const inputElement=document.querySelector('.js-name-input');
	const dateInputElement=document.querySelector('.js-due-date-input');
	
		if(	inputElement.value!=''){
	const name=inputElement.value;
	
	const dueDate=dateInputElement.value;
	TodoList.push({name,dueDate});
	



renderTodoList();
	
	inputElement.value='';
	


		}

}






function renderTodoList(){
let TodoListHTML='';
for(let i=0; i<TodoList.length; i++)
{
	
const todoObject=TodoList[i];

const {name,dueDate}=todoObject;
const html=`<p>${name} ${dueDate} <button onclick="TodoList.splice(${i},1); renderTodoList();">delete</button></p>`;


TodoListHTML+=html;

}

document.querySelector('.js-todo-list').innerHTML=TodoListHTML;


}