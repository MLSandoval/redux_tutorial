import React from 'react'
import { connect } from "react-redux";

import Header from './header.jsx'
import AddTodo from './addTodo.jsx'
import TodoList from './todoList.jsx'
import VisibilityFilters from './visibilityFilters.jsx'

class TodoApp extends React.Component {
  render () {
    return(
      <div className="main">
        <Header></Header>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <VisibilityFilters></VisibilityFilters>
      </div>
    )
  }
}