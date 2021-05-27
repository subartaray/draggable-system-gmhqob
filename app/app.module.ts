import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable/draggable.directive';
import { DraggableHelperDirective } from './draggable/draggable-helper.directive';
import { MovableAreaDirective } from './movable/movable-area.directive';
import { MovableDirective } from './movable/moveable.directive';
import { SortableDirective } from './sortable/sortable.directive';
import { SortableListDirective } from './sortable/sortable-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DraggableHelperDirective,
    MovableDirective,
    MovableAreaDirective,
    SortableDirective,
    SortableListDirective
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
