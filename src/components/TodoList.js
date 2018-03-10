import React from 'react'

const TodoList = ({todoTasks, _onEditTask, _onRemoveTask, _onCheckTask}) =>
	<div className="todo-list">
		{
			todoTasks.map(({id, description, checked, modifying}) => 
				<div className="todo-task">  
					<div className="todo-task-id">
						<p>{id}.</p>
					</div>
					{
						!modifying ? 
							<div 
								id={id} 
								onClick={(e)=> _onCheckTask(parseInt(e.target.id))} 
								style={{textDecorationLine: checked ? 'line-through' : 'none'}} 
								className="todo-task-description">
								<p id={id} onClick={(e)=> _onCheckTask(parseInt(e.target.id))} >{description}</p> 
							</div>
							:
							<input
								id={id}
								value={description}
								className="edit-todo"
								autoFocus
								onKeyPress={(e)=> e.charCode === 13 ? 
													_onEditTask(parseInt(e.target.id), 'modify') :
													_onEditTask(parseInt(e.target.id), 'editing', e.target.value)}
								onChange={(e)=> _onEditTask(parseInt(e.target.id), 'editing', e.target.value)}
							/>
					}
					<div className="todo-task-buttons">
						<h6 
							id={id} 
							onClick={(e)=> _onEditTask(parseInt(e.target.id), 'modify')} 
							style={{color: 'green'}}>{!modifying ? 'edit' : 'save'} </h6>
						<h6 
							id={id} 
							onClick={(e)=> _onRemoveTask(parseInt(e.target.id))} 
							style={{color: 'red'}}>remove</h6> 
					</div>
				</div>
		)}
	</div>

export default TodoList