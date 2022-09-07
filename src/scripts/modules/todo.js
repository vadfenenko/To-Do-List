export class Todo {
  constructor(title, description){
		this.title = title;
		this.description = description;
		this.time = new Date / 1000;
		this.date = {
			day: new Date().getDate(),
			month: new Date().getMonth(),
			year: new Date().getFullYear(),
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
		};
  }
};

