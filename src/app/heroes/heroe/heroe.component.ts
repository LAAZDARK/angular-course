import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeroeComponent{

  name: string = 'Ironman';
  age: number = 45;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  rename(): void {
    this.name = 'Spiderman';
  }

  renameAge(): void {
    this.age = 80;
  }

}
