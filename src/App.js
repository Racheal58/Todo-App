import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  state = {
    category: '',
    todos: [
      // {
      //   category: 'to do',
      //   tasks: [{ text: 'get sliced bread', done: true }]
      // },
      // {
      //   category: 'to do',
      //   tasks: [{ text: 'get groceries', done: false }]
      // }
    ]
  };

  createTodo = () => {
    const todos = this.state.todos;
    todos.push({ category: 'rename category', tasks: [] });
    this.setState({ todos: todos });
  };

  addItem = (id, task) => {
    const todos = this.state.todos;
    todos[id].tasks.push(task);
    this.setState({ todos: todos });
  };

  removeItem = id => {
    const todos = this.state.todos;
    todos.splice(id, 1);
    this.setState({ todos: todos });
  };

  checkedItem = (todoId, taskId) => {
    const todos = this.state.todos;
    let taskDoneState = todos[todoId].tasks[taskId].done;
    todos[todoId].tasks[taskId].done = !taskDoneState;
    this.setState({ todos: todos });
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
      <div class="container">
        <div class="header-container clearfix">
          <h3 class="header">Todo</h3>
          <span class="add-task" onClick={this.createTodo}>
            +
          </span>
        </div>
        <ul class="todo-list">{todoList}</ul>
      </div>
    );
  }
}

export default App;
