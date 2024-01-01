import { makeAutoObservable } from 'mobx';
import Counter from '../models/Counter';

class CounterViewModel {
  counter = new Counter();

  constructor() {
    makeAutoObservable(this);
  }

  get count() {
    return this.counter.count;
  }

  increment() {
    this.counter.count += 1;
  }

  decrement() {
    this.counter.count -= 1;
  }
}

export default CounterViewModel;
