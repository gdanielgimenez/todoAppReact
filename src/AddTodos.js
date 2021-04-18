import { Button, Container, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import useStyles from './Style'


const AddTodos = ({addTodo}) =>{
 const [content,setContent] = useState({content:''});
 const classes = useStyles();
 //functions 
    const handleChange =(e)=>{
        setContent({content:e.target.value});
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        addTodo(content);
        setContent({content:''})
    }   
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                 < TextField fullWidth={true} required id="texto" label="add new todo"  onChange={handleChange} value={content.content} /> 
                 <br/><br/>
                 <Button type="submit" className={classes.button} variant="contained">submit</Button>
            </form>
        </Container>
    )
}
export default AddTodos;