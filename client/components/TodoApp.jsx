import React from 'react'
import { connect } from "react-redux";

import Header from './header.jsx'
import AddTodo from './addTodo.jsx'
import TodoList from './todoList.jsx'
import VisibilityFilters from './visibilityFilters.jsx'

class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos : []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo){
    let todos = this.state.todos.map();
    todos.push(todo)

    this.setState({todos})
  }

  render () {
    return(
      <div className="main">
        <Header></Header>
        <AddTodo addTodoCallback={this.addTodo}></AddTodo>
        <TodoList></TodoList>
        <VisibilityFilters></VisibilityFilters>
      </div>
    )
  }
}