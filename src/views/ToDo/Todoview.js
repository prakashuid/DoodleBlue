import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Card, Form, input } from 'react-bootstrap';
import './todo.css'

function Todo({ todo, index, completedTodo, deleteTodo, isChecked }) {    
    
    return (
      <div className="todo "  >         
        { todo.completed  ? <span className='myTodo' style={{ textDecoration: 'line-through',  wordWrap: 'break-word'}}>{todo.title}</span>
        :<span className='myTodo' style={{ textDecoration: 'none', wordWrap: 'break-word'}}>{todo.title}</span>}
        <div className='row'>           
           <div className='col-1' style={{marginLeft: '20px'}}><Form.Check 
            type={'checkbox'}                 
            id={`custom-${todo.text}`}
            onChange={() => completedTodo(index)}
      />
</div> 
           <div className='col-8'></div> 
           <div className='col-2'><Button variant="success" onClick={() => deleteTodo(index)}>Delete</Button></div> 
          
          
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();      
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit} className="row  mt-5" style={{marginBottom: '10px'}}> 
      <Form.Group className='col-9'>        
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo..." />
      </Form.Group>
      <Button variant="success"  className='col-3 marginLeft mb-5' type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  
  const  ToDoView =()=> {
    const [todos, setTodos] = useState([
      {
        userId: 2,
        id: 0 , 
        title: "Initial Todo List ...",
        completed: false
      }
    ]);
    const [isChecked, setIsChecked] = useState(false);
  
    const addTodo = (title) => {

        const nameChange = title;
        const URL = "https://jsonplaceholder.typicode.com/todos";        
        let details = {userId:3, id: todos.length +1, title: nameChange, completed: false}
      const newTodos = [...todos, {details}];      
      setTodos(newTodos);

      axios.post(URL, details)
      .then(function (response) {    
        const newTodos = [...todos, response.data];    
        setTodos(newTodos);
        
      })
      .catch(function (error) {
        console.log(error);
      });

    
    };
  
       useEffect(()=>{
        const URL = "https://jsonplaceholder.typicode.com/todos";
        axios.get(URL)
        .then((response) =>{            
           const veryfiedData = response.data.filter((e)=>{
                    return (e.userId == 3 && e.completed == false)
            })            
            setTodos(veryfiedData);            
          })
          .catch((error) =>{
            console.log(error);
          })
    
    },[])

    const completedTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = true;
      setTodos(newTodos);
      setIsChecked(!isChecked);
    };
  
    const deleteTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      
        <div className="container">
          <h1 className="text-center mb-4 pt-2">Todo List</h1>
          
          <div>
            {todos.map((todo, index) => (
              <Card className='cardTodo'>
                <Card.Body>

                  <p className='indexNumber'>{index + 1}</p>  
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completedTodo={completedTodo}
                  deleteTodo={deleteTodo}
                  isChecked={isChecked}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
          <FormTodo addTodo={addTodo} />
        </div>
      
    );
  }

  export default ToDoView;