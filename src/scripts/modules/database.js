const database = {

    setData(array, key){
        const element = JSON.stringify(array);
        window.localStorage.setItem(key, element);
	},

    getData(key){
        return JSON.parse(window.localStorage.getItem(key));
    },

}

export {database};



