import React, {Component} from 'react';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: ""
        };
        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    setNewTask(e) {
        this.setState(
            {newTask: e.target.value}
        )
    }

    addTask() {
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask]
        },
        () => {
            this.setState(
                {newTask: ""}
            )
        })
    }

    updateTask(e) {
        this.setState({
            task: this.state.tasks.splice(e.target.attributes.name.value, 1)
        })
    }

    render() {
        return (
            <div>
                <h3>ToDo</h3>
                <input type="text" placeholder="Enter a task" value={this.state.newTask} onChange={e => this.setNewTask(e)}></input>
                <button type="button" onClick={this.addTask}>Add Task</button>
                <p>Click on the task, once complete, to remove it from the list.</p>
                <ul>
                    {this.state.tasks.map((task, idx) => {
                        return <li name={idx} style={{cursor: "pointer"}} key={idx} onClick={this.updateTask}>{task}</li>
                    })}
                </ul>
            </div>
        )
    }
}