import { AfterContentInit, ContentChildren, Directive, EventEmitter, Output, QueryList } from '@angular/core';
import { SortableDirective } from './sortable.directive';

export interface SortEvent {
  index: number;
  newIndex: number;
}

@Directive({
  selector: '[appSortableList]'
})
export class SortableListDirective implements AfterContentInit {
  @ContentChildren(SortableDirective) sortables: QueryList<SortableDirective>;

  @Output() sort = new EventEmitter<SortEvent>();

  private viewRects: ClientRect[];

  ngAfterContentInit(): void {
    this.sortables.forEach(sortable => {
      sortable.dragStart.subscribe(() => this.measureBoundaries());
      sortable.dragMove.subscribe(event => this.detectSorting(sortable, event));
    });
  }

  private measureBoundaries() {
    this.viewRects = this.sortables.map(s => s.element.nativeElement.getBoundingClientRect());
  }

  private detectSorting(sortable: SortableDirective, event: PointerEvent) {
    const index = this.sortables.toArray().indexOf(sortable),
          prevRect = this.viewRects[index - 1],
          nextRect = this.viewRects[index + 1];

    if (prevRect && event.clientY < prevRect.top + prevRect.height / 2) {
      this.sort.emit({
        index: index,
        newIndex: index - 1
      });
    } else if (nextRect && event.clientY > nextRect.top + nextRect.height / 2) {
      this.sort.emit({
        index: index,
        newIndex: index + 1
      });
    }
  }
}
