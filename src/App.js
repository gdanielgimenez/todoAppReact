import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos'
import './App.css';
import { Container, Grid, Typography } from '@material-ui/core';
import logo from './logo.svg';

class App extends Component {
//setting up the state
state = {
  todos :[
    {id:1, content:'take out the garbage'},
    {id:2, content:'make dinner'},
    {id:3, content:'walk the dog'},
  ]
}
//functions
deleteTodo = (id) =>{
  const todos = this.state.todos.filter(todo =>{
    return todo.id !==id
  });
  this.setState({todos})
}
addTodo = (todo) =>{
  todo.id = Math.random();
  let todos = [...this.state.todos,todo];
  this.setState({todos});
}
//--------------------------------------------------
  render(){
    return (
      <Container maxWidth="lg" component="div">
        <Grid container justify="center"  spacing={0}>
          <Grid item lg={3}>
            <Typography color="primary" align="center" variant="h2">todo list </Typography> 
        </Grid>
        <Grid item lg={3}>
            <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        </Grid>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
        <AddTodos addTodo ={this.addTodo}/>
      </Container>
    );
  }
}

export default App;
