import { makeAutoObservable } from 'mobx';

class HeaderViewModel {
  text = 'Counter App';

  constructor() {
    makeAutoObservable(this);
  }

  // Add any state or behavior you want for your header here
}

export default HeaderViewModel;