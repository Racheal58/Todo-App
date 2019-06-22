import React, { Component } from 'react';

class Todo extends Component {
  state = {
    task: '',
    formShow: false
  };
  handleChange = event => {
    this.setState({ task: event.target.value });
  };

  submitform = e => {
    e.preventDefault();

    if (this.state.task === '') {
      return;
    }

    const task = { text: e.target.elements.task.value, done: false };
    this.props.addItem(this.props.todoId, task);
  };

  showForm = () => {
    this.setState({ formShow: true });
  };

  hideForm = () => {
    this.setState({ formShow: false });
  };

  removeTodo = () => {
    this.props.removeItem(this.props.todoId);
  };

  checkedTodo = e => {
    let taskId = e.target.id;
    this.props.checkedItem(this.props.todoId, taskId);
  };

  render() {
    const { data } = this.props;
    let taskList = data.tasks.map((data, index) => {
      return (
        <div class="task clearfix" key={index}>
          <input
            type="checkbox"
            id={index}
            onChange={this.checkedTodo}
            checked={data.done}
          />
          <label for={index}>{data.text}</label>
        </div>
      );
    });

    return (
      <li class="todo">
        <input class="tag" defaultValue={data.category} />
        <div class="controls clearfix">
          <span class="control delete" onClick={this.removeTodo}>
            +
          </span>
          <span class="control add" onClick={this.showForm}>
            +
          </span>
        </div>
        {taskList}
        {this.state.formShow && (
          <form class="add-task clearfix" onSubmit={this.submitform}>
            <input
              type="text"
              class="task-input"
              placeholder="Write your task"
              name="task"
              value={this.task}
              onChange={this.handleChange}
            />
            <div class="buttons clearfix">
              <button
                type="submit"
                value="submit"
                class="button"
                style={{ backgroundColor: '#5FAD56' }}
              >
                Add
              </button>
              <button
                type="button"
                class="button"
                style={{ backgroundColor: '#B4436C' }}
                onClick={this.hideForm}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </li>
    );
  }
}

export default Todo;
