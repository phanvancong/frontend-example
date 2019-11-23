import style from './main.css';
import { Observable, fromEvent, interval } from 'rxjs';

//example of switchMap from https://www.youtube.com/watch?v=6lKoLwGlglE
let button = document.querySelector("#smButton");
let obs1 = fromEvent(button, 'click');
let obs2 = interval(1000);
let counter = 0;
obs1.subscribe(
  event => {
    counter++;
    obs2.subscribe(i => {
      console.log('i ', counter, ' ', i)
    })
  }
);
