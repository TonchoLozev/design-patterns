// Without Class
const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
};

//When we create an instance it will be referent to single instance
const instanceUS = UserStore;

//Freeze object so it can't be modified
Object.freeze(UserStore);

UserStore.loos = 'a';
UserStore.add({id: 1, name: 'SQL'});
UserStore.add({id: 2, name: 'NODE'});

instanceUS.feet = 'b';
console.log(instanceUS.get(1));

//With Class
class UserStoreClass {
  constructor() {
    //If UserStore is instantiated we won't create new instance, we'll just refer it to the already created instance
    if (!UserStoreClass.instance) {
      this._data = [];
      UserStoreClass.instance = this;
    }
    return UserStoreClass.instance;
  }

  add(item) {
    this._data.push(item);
  }

  get(id) {
    return this._data.find(d => d.id === id);
  }
}

//First and second instance will be referent to single instance
const instanceUSC = new UserStoreClass();
const secondInstanceUSC = new UserStoreClass();

//Freeze object so it can't be modified
Object.freeze(instanceUSC);

instanceUSC.loos = 'a';
instanceUSC.add({id: 1, name: 'SQL'});
instanceUSC.add({id: 2, name: 'NODE'});

secondInstanceUSC.feet = 'b';
console.log(secondInstanceUSC);