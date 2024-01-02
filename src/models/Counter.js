import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCount(newCount) {
    this.count = newCount;
  }
}

export default Counter;
