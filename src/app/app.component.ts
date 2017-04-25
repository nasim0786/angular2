import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';

@Component({
  selector: 'app-root',
  template: '<h1>Hello World</h1><courses></courses>',
  directives: [CoursesComponent]
})
export class AppComponent {
  title = 'app works!';
}
