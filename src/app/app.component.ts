import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero}} details! Hello {{name}}`,
})
export class AppComponent  {
name = 'Angular';
title = 'Tour of Heroes';
hero = 'Windstorm';
}
