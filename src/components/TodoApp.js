import React, { Component } from 'react';
import TodoList from './TodoList.js'

export default class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [],
			id: 0,
			description: ''
		}
	}

	_onAddTask = (key) => {
		let { id, description, todoList } = this.state
		if(key === 13) {
			let newTodoList = [
				...todoList,
				{
					id,
					description,
					checked: false,
					modifying: false
				}
			]
			this.setState({ id: id + 1, todoList: newTodoList, description: ''})
		}
	}

	_onCheckTask = (id) => {
		const { todoList } = this.state

		let newTodoList = todoList.map(e=> e.id === id ? {...e, checked: !e.checked} : e)
		this.setState({todoList: newTodoList})
	}

	_onEditTask = (id, editType, newDescription) => {
		let { todoList } = this.state
		let newTodoList = []
		console.log(editType,'edit')
		if(editType === 'modify') {
			newTodoList = todoList.map(e=> e.id === id ? {...e, modifying: !e.modifying} : e)
		} else {
			newTodoList = todoList.map(e=> e.id === id ? {...e, description: newDescription} : e)
		}
		
		this.setState({todoList: newTodoList})
	}

	_onRemoveTask = (id) => {
		const { todoList } = this.state

		let newTodoList = todoList.filter((e)=> !(e.id === id))
		this.setState({todoList: newTodoList})
	}

	render() {
		const { todoList, description } = this.state

		return (
			<div className="todo-container">
				<input 
					placeholder="Add new Task" 
					className="add-todo"
					value={description}
					onChange={(e)=> this.setState({description: e.target.value})}
					onKeyPress={(e)=> this._onAddTask(e.charCode)} />
				<TodoList 
					todoTasks={todoList} 
					_onCheckTask={(e)=> this._onCheckTask(e)}
					_onRemoveTask={(e)=> this._onRemoveTask(e)}
					_onEditTask={(e, idType, newDescription)=> this._onEditTask(e, idType, newDescription)} />
			</div>
		)
	}
}