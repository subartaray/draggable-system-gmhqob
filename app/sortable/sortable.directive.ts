import { Directive, ElementRef, Input } from '@angular/core';

import { DraggableDirective } from '../draggable/draggable.directive';

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective extends DraggableDirective {
  @Input('appSortable') set sortable(sortable: boolean) {
    this.enabled = sortable;
  }

  constructor(public element: ElementRef) {
    super();
  }
}

