import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './todo.css';
import { Button, Container, Row, Col,    } from 'react-bootstrap';

const Todo = () =>{    
    const [todoData, setTodoData] = useState([]);
    const [userInput, setUserInput] = useState([]);    
    const [tempData, setTempData] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    // useEffect(()=>{
    //     // const URL = "https://jsonplaceholder.typicode.com/todos"
    //     // axios.get(URL)
    //     // .then((response) =>{            
    //     //    const verifyedData = response.data.filter((e)=>{
    //     //             return (e.userId === 2 && e.completed == true)
    //     //     })
    //     //     setTodoData(verifyedData);
            
    //     //   })
    //     //   .catch((error) =>{
    //     //     console.log(error);
    //       })
    
    // },[])


    const addToDoHandler =(e)=>{              
        e.preventDefault();                
        setTodoData( [...todoData , {userId: 2, id: todoData.length + 1, title: userInput, completed: false }]) 
    }
    
    const deleteHandler = (val) =>{        
        const newTodos = [...todoData];
        newTodos.splice(val, 1);
        setTodoData(newTodos);
    }
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

const isCheckedDisplay =()=>{
    return 
}
const notCheckedDisplay =()=>{
    return 
}
    return(
        <div>
     
            <h2>Todo List</h2>
            
            {todoData.map((item)=>{
                return <Container key={item.id}>
                    <Row className="row"> 
                <Col>
                <input
          type="checkbox"
          id={`toDo-checkbox-${item.id}`}
          name={item.title}
          value={item.title}
          checked={isChecked}
          onChange={handleOnChange}
        />
        
           </Col>
                 <Col>{isChecked ? <p className="line-Through">{item.title} {item.id}</p> :  <p className="non-line-Through">{item.title}</p>}</Col>
                 <Col className='col'><button onClick={deleteHandler(item.id)}>Delete</button></Col>
                 </Row>
                 </Container>
 
            })}
           
            

            <div className='add-ToDoContainer'>
                <form onSubmit={addToDoHandler}>
                    <input value={userInput} onChange={(e)=> setUserInput(e.target.value)}  placeholder='Add your ToDo list' />
                    <button onClick={addToDoHandler}>Add</button>
                </form>
            </div>
        </div>
    )

}

export default Todo;
