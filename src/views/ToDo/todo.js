import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './todo.css';
import { Button, Container, Row, Col,  Form  } from 'react-bootstrap';

const Todo = () =>{    
const Initial = [{userId: 2, id: 1, title: 'Initial Todo List', completed: false}]
    const [myTodo, setMyTodo] = useState(Initial);
    const handleSubmit =(e)=>{    
        e.preventDefault();
        const val = e.target.value
        if(!val) return;
        setMyTodo(val);
    }
    return    myTodo.map((e, index)=>{

            return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>{index + 1}</div>
                    <div className='col'><input type={'checkbox'} /></div>
                    <div className='col'><p>{e.title}</p></div>
                    <div className='col'><button>Delete</button></div>
                </div>
                <div className='row'>
                    <div className='col1'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >    
                            {/* <Form.Control type="text" className="input" onChange={e=>{e.target.value}} placeholder="Add your Todo" /> */}
                            
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                    </div>
                    <div className='col1'> </div>
                </div>
            </div>

            )
        })
    

}

export default Todo;
