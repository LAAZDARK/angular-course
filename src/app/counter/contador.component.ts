import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  styleUrls: ['../app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h3>Base: {{base}} </h3>

  <button (click)="acumular(base)">+{{base}}</button>

  <span> {{num}} </span>

  <button (click)="acumular(-base)">-{{base}}</button>

  `
})
export class ContadorComponent {

  title: string = 'Contador App';
  base: number = 5;
  num: number = 0;

  acumular( valor: number ): void {
    this.num += valor;
  }

}
