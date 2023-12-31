import { makeAutoObservable } from 'mobx';

class FooterViewModel {
  text = '@CopyRight 2023';

  constructor() {
    makeAutoObservable(this);
  }

  // Add any state or behavior you want for your footer here
}

export default FooterViewModel;