module.exports = function() {
    let storage = window.localStorage;
    this.set = function(key, data){
        storage.setItem(key, JSON.stringify(data));
    };
    this.get = function(key){
        try {
            return JSON.parse(storage.getItem(key));
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}