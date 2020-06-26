let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {


 for (i=0; arrayOfTodos.length; i++) {
   
    let todoList= document.getElementById("todo-list");
     
    let todoItem = "";
    todoItem= document.createElement("LI");

    let todoTitle="";
    todoTitle = document.createTextNode(arrayOfTodos[i].title);

    
    

    todoItem.appendChild(todoTitle);

    todoList.appendChild(todoItem);
    }
  }