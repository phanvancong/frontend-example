import style from './main.css';
import { Observable, fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//example of switchMap from https://www.youtube.com/watch?v=6lKoLwGlglE
let button = document.querySelector("#smButton");
let obs1 = fromEvent(button, 'click');
let obs2 = interval(1000);
let counter = 0;
// obs1.subscribe(
//   event => {
//     counter++;
//     obs2.subscribe(i => {
//       console.log('i ', counter, ' ', i)
//     })
//   }
// );
obs1.pipe(
  switchMap(
    e => obs2
  )
).subscribe(
  i => console.log(i),
  err => console.log(err),
  () => console.log('complete')
);
