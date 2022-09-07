import { Todo } from "./todo.js";

const process = {


	createTask(array){
		const title = document.querySelector('#title');
		const description = document.querySelector('#description');
		const todo = new Todo(title.value, description.value);
	    array.push(todo);
	},

	render(array){
		function renderTodo(obj, index){
			const tmpl = document.querySelector('#template').content.querySelector('.todo');
			const todo = tmpl.cloneNode(true);
			todo.setAttribute('data-index', index);

			const title = todo.querySelector('.todo__title');
			const description = todo.querySelector('.todo__description');
			const date = todo.querySelector('.todo__date');

			const buttons = todo.querySelectorAll('.todo__btn');
			for (let button of buttons) {
				button.setAttribute('data-index', index);
			}
			let day = obj.date.day;
			let month = obj.date.month;
			let hours = obj.date.hours;
			let minutes = obj.date.minutes;
			if (day < 10) day = '0' + day;
			if (month < 10) month = '0' + (month + 1);
			if (hours < 10) hours = '0' + hours;
			if (minutes < 10) minutes = '0' + minutes;

			title.textContent = obj.title;
			description.textContent = obj.description;
			date.textContent = `${day}.${month}.${obj.date.year} ${hours}:${minutes}`;

			if (obj.complete) {
				todo.classList.add('js-complete');
				const completeBtn = todo.querySelector('[data-action = "complete"]');
       			const changeBtn = todo.querySelector(`[data-action = "change"]`);
				completeBtn.classList.add('hidden');
				changeBtn.classList.add('hidden');
			} 
			
			return todo;
		}

		const fragment = document.createDocumentFragment();
		const lists = document.querySelector('.contener-todo');

		for (let i = array.length - 1; i >= 0; i--) {
			fragment.append(renderTodo(array[i], i));
		}

		lists.append(fragment);
	},

	clearRender(){
		document.querySelector('.contener-todo').innerHTML = '';
	},
}

export {process};





