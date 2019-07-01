import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  state = {
    category: '',
    todos: []
  };

  componentDidMount = () => {
    const todos = this.state.todos;
    JSON.parse(localStorage.getItem('todos'));
    this.setState({
      todos
    });
  };

  createTodo = () => {
    const todos = this.state.todos;
    todos.push({ category: 'rename category', tasks: [] });
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  addItem = (id, task) => {
    const todos = this.state.todos;
    todos[id].tasks.push(task);
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  removeItem = id => {
    const todos = this.state.todos;
    todos.splice(id, 1);
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  checkedItem = (todoId, taskId) => {
    const todos = this.state.todos;
    let taskDoneState = todos[todoId].tasks[taskId].done;
    todos[todoId].tasks[taskId].done = !taskDoneState;
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  render() {
    let todoList = this.state.todos.map((data, index) => {
      return (
        <Todo
          addItem={this.addItem}
          removeItem={this.removeItem}
          todoId={index}
          checkedItem={this.checkedItem}
          key={index}
          data={data}
        />
      );
    });

    return (
      <div className="container">
        <div className="header-container clearfix">
          <h3 className="header">Todo</h3>
          <span className="add-task" onClick={this.createTodo}>
            +
          </span>
        </div>
        <ul className="todo-list">{todoList}</ul>
      </div>
    );
  }
}

export default App;
