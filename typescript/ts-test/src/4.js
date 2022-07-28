var items = {
    list: ['a', 'b', 'c']
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Queue.prototype.length = function () {
        return this.list.length;
    };
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
})();
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
