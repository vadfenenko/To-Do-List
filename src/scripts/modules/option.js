import {process} from './process.js';
import {database} from './database.js';

const option = {
    add(array){
        document.querySelector('.popup-add').classList.add('hidden');
        const filter = document.querySelector('#filter');
        filter.value = 'active';
        window.tasksActive = true;
        process.createTask(array);
        database.setData(array, 'active-tasks');
        process.clearRender();
        process.render(array);
    },

    change(array, index){
        const title = document.querySelector('#popup-change-title');
        const description = document.querySelector('#popup-change-description');
        title.value = array[index].title;
        description.value = array[index].description;
        document.querySelector('.popup-change').classList.remove('hidden');
        document.querySelector('[data-action="save"]').setAttribute('data-index', index);
    },

    remove(array, index, key){ 
        array.splice(index, 1);
        database.setData(array, key);
        process.clearRender();
        process.render(array);
    },

    save(array){
        const title = document.querySelector('#popup-change-title').value;
        const description = document.querySelector('#popup-change-description').value;
        const index = document.querySelector('[data-action="save"]').dataset.index;
        const popup = document.querySelector('.popup-change');
        popup.classList.add('hidden');
        array[index].title = title;
        array[index].description = description;
        database.setData(array, 'active-tasks'); 
        process.clearRender();
        process.render(array);
    },

    complete(array, index){
        const completeTasks = database.getData('complete-tasks');
        const element = array[index];
        element.complete = true;
        array[index].time = new Date() / 1000;
        completeTasks.push(element);
        database.setData(completeTasks, 'complete-tasks');
        array.splice(index, 1);
        database.setData(array,'active-tasks');
        process.clearRender();
        process.render(array);
    },

    close(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        document.querySelector('.popup-change').classList.add('hidden');
        document.querySelector('.popup-add').classList.add('hidden');
    },

    filter(array){
	    process.clearRender();
 	    process.render(array); 
    },

    sort(array, sortType){
        if (sortType === 'sort-old') {
            array.sort((a,b) => b.time - a.time);
            process.clearRender();
            process.render(array);
        }

        if (sortType === 'sort-new') {
            array.sort((a,b) => a.time - b.time);
            process.clearRender();
            process.render(array);
        }
    },

    search(array, searchItem){
        const filter = document.querySelector('#filter');
        filter.value = 'active';
        window.tasksActive = true;

        if (searchItem === '') {
            process.clearRender();
            process.render(array);
            return
        }

        const filterArray = array.filter(element => {
            return element.title.indexOf(searchItem) > -1;
        });

        process.clearRender();
        process.render(filterArray);
    }
}

export {option};



