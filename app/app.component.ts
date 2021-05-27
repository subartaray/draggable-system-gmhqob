import { Component } from '@angular/core';
import { SortEvent } from './sortable/sortable-list.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sortableList: string[] = [
    'Box 1',
    'Box 2',
    'Box 3',
  ];

  sorted(event: SortEvent) {
    const sortable = this.sortableList[event.index];

    this.sortableList[event.index] = this.sortableList[event.newIndex];
    this.sortableList[event.newIndex] = sortable;
  }
}
