import { BehaviorSubject } from 'rxjs';  

  export const pages = new BehaviorSubject(null);
  export const page = new BehaviorSubject(null);
  export const themes = new BehaviorSubject(null);
  export const configs = new BehaviorSubject(null);
  export const error = new BehaviorSubject('');
  export const loading = new BehaviorSubject(false);
