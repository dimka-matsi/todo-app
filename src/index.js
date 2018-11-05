import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	);
};

const AppHeader = () => {
	return (
		<h1>My ToDo list</h1>
	);
};

const SearchPanel = () => {
	return (
		<input placeholder="search" />
	);
};

const App = () => {
	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<ToDoList />
		</div>
	);
};


ReactDOM.render(<App />, document.querySelector('#root'));