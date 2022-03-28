import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Card, Form, input } from 'react-bootstrap';
import './todo.css'

function Todo({ todo, index, markTodo, removeTodo, isChecked }) {    
    console.log(`custom-${todo.text}`)
    return (
      <div className="todo "  >         
        { todo.isDone  ? <span className='myTodo' style={{ textDecoration: 'line-through'}}>{todo.text}</span>
        :<span className='myTodo' style={{ textDecoration: 'none'}}>{todo.text}</span>}
        <div className='row'>           
           <div className='col-1'><Form.Check 
            type={'checkbox'}                 
            id={`custom-${todo.text}`}
            onChange={() => markTodo(index)}
      />
</div> 
           <div className='col-8'></div> 
           <div className='col-2'><Button variant="success" onClick={() => removeTodo(index)}>Delete</Button></div> 
          
          
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
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
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
        text: "Initial Todo List ...",
        isDone: false
      }
    ]);
    const [isChecked, setIsChecked] = useState(false);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const markTodo = (index) => {

        console.log(index, !isChecked)
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
      setIsChecked(!isChecked);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          
          <div>
            {todos.map((todo, index) => (
              <Card className='cardTodo'>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
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