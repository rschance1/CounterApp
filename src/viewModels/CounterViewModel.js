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

  onIncrement() {
    this.counter.setCount(this.counter.count +=1);
  }

  onDecrement() {
    this.counter.setCount(this.counter.count -= 1);
  }
}

export default CounterViewModel;
