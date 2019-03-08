import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipesDemo';
  name = 'johan';
  name2 = 'joHan SebasTian Morales rodRIGuez';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  percentResult = 0.234;
  salario = 3500000;
  hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    age: 35,
    occupation: 'Owner of Wayne Enterprises'
  };
  asyncValue = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('resolving the value!'), 4000 );
  });
  newDate = new Date();
  videoCode = 'rlR4PJn8b8I';
}
