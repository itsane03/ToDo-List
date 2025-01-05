import React,{useState} from 'react';

function ToDoList(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){

        if(newTask.trim() !== ''){
            setTask(t => [...t,newTask]);
       setNewTask('');
        }

       
    }

    function deleteTask(index){
        const updatedTask = task.filter((_,i) => i !== index);
        setTask(updatedTask);
    }

    function moveUp(index){
      if(index > 0){
        const updatedTask = [...task];
        [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];  
        setTask(updatedTask);
      } 
    }

    function moveDown(index){
        if(index < task.length-1){
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];  
            setTask(updatedTask);
          } 
    }
    

    return(<div className='to-do-list'>
        <h1>To-Do List</h1>
        <div>
            <input type="text"placeholder='enter a task' value={newTask}  onChange={handleInputChange}/>
            <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((task,index)=>(
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='del-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-up-button' onClick={() => moveUp(index)}>⬆️</button>
                    <button className='move-down-button' onClick={() => moveDown(index)}>⬇️</button>
                    
                </li>
            ))}
        </ol>

    </div>);
}

export default ToDoList;