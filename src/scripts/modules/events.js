import {database} from './database.js';
import {option} from './option.js';

const filter = document.querySelector('#filter');
const search = document.querySelector('#search');
const openPopup = document.querySelector('#add-todo');
const openPopupMobile = document.querySelector('#add-todo-mobile');


document.body.addEventListener('click', evt => {
  const activeTasks = database.getData('active-tasks');
  const completeTasks = database.getData('complete-tasks');
  const str = filter.value
  const target = evt.target;
  const action = target.dataset.action;
  const index = target.dataset.index;
  const key = (str === 'active') ? 'active-tasks' : 'complete-tasks';
  let array = (window.tasksActive && str === 'active') ? activeTasks : completeTasks;
  if (action === 'add') array = activeTasks;
  if (action) {
    option[action](array, index, key);
  }
});
  
filter.addEventListener('change', () => {
  const activeTasks = database.getData('active-tasks');
  const completeTasks = database.getData('complete-tasks');
  const str = filter.value;
  let array = (window.tasksActive && str === 'active') ? activeTasks : completeTasks;
  option.filter(array);
});

document.body.addEventListener('click', evt => {
  const target = evt.target;
  const sortType = target.dataset.sort;
  const str = filter.value
  const activeTasks = database.getData('active-tasks');
  const completeTasks = database.getData('complete-tasks');
  let array = (window.tasksActive && str === 'active') ? activeTasks : completeTasks;
  if (sortType) {
    option.sort(array, sortType);
  }
});

search.addEventListener('input', () => {
  const activeTasks = database.getData('active-tasks');
  const searchItem = search.value
  option.search(activeTasks, searchItem);
});

function showPopup(){
  const popupAdd = document.querySelector('.popup-add');
  popupAdd.classList.remove('hidden');
  document.querySelector('#title').value = '';
  document.querySelector('#description').value = '';
}

openPopup.addEventListener('click', showPopup);
openPopupMobile.addEventListener('click', showPopup);

function toUp(evt){
  const target = evt.target;
  const action = target.dataset.up;
  if(action) {
    window.scrollTo(0, 0)
  }
}

document.body.addEventListener('click', toUp);