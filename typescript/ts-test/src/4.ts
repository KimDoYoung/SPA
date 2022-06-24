interface Item<T> {
    list: T[];
}
const items: Item<string> = {
    list: ['a', 'b', 'c']
}

class Queue<T> {
    list: T[] = [];
    public length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());