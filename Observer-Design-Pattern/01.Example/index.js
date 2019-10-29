class Subject {
    constructor() {
        this.observers = [];
    }

    subscribeOsberver(observer) {
        this.observers.push(observer);
    }

    unsubscribeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index].notify(index);
        }
    }

    notifyAllObservers() {
        for (const observer of this.observers) {
            const index = this.observers.indexOf(observer);
            observer.notify(index);
        }
    }
}

class Observer {
    constructor(name){
        this.name = name;
    }

    notify(index) {
        console.log("Observer " + index + " is notified!" + "Name: " + this.name)
    }
}

const subject = new Subject();

const observer1 = new Observer('joro');
const observer2 = new Observer('gosho');
const observer3 = new Observer('gergin');
const observer4 = new Observer('gomo');

subject.subscribeOsberver(observer1);
subject.subscribeOsberver(observer2);
subject.subscribeOsberver(observer3);
subject.subscribeOsberver(observer4);

subject.notifyObserver(observer4);
subject.notifyAllObservers();