import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Hulk'];
  heroeDelete?: string = '';

  deleteHeroe(): void {
    this.heroeDelete = this.heroes.shift();
    // this.heroeDelete = this.heroes.shift() || '';

  }

}
