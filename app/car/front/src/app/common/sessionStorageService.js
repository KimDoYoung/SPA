module.exports = () => {
    var storage = window.sessionStorage;
    this.set = function(key, data){
        sessionStorage.setItem(key, JSON.stringify(data));
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