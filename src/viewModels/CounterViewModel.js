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
    this.counter.increment();
  }

  decrement() {
    this.counter.decrement();
  }
}

export default CounterViewModel;
