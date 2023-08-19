import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'Home' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Usuarios', url: '/usuarios', icon: 'person' },
    { title: 'Productos', url: '/productos', icon: 'pricetags' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
