import React from 'react'
import { connect } from 'react-redux'

class AddTodo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoText: 'Enter New Todo'
    }
    this.handleNewTodo = this.handleNewTodo.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    this.props.addTodoCallback()
    this.setState({todoText: 'Enter New Todo'})
  }

  handleNewTodo (e) {
    this.setState({todoText: event.target.value})
  }

  render () {
    <form onSubmit action="">
      <div className="input-container">
        <div className="new-todo">New Todo</div>
        <input value={this.state.todoText} onChange={this.handleNewTodo} type="text" className="todo-text"/>
      </div>
      <button className="add-todo"  type="submit">Add Todo</button>
    </form>
  }
}