import {database} from './database.js';
import {process} from './process.js';

    if(window.localStorage.length === 0) {
        window.localStorage.setItem('active-tasks', '[]');
        window.localStorage.setItem('complete-tasks', '[]');
    }
    
    const tasksComplete = database.getData('complete-tasks')
    
    if(tasksComplete.length > 1000) { //memory limits
        tasksComplete.splice(0, 500)
        database.setData(tasksComplete, 'complete-tasks')
    }
      
    window.tasksActive = true;
    const activeTasks = database.getData('active-tasks');
    process.render(activeTasks);














