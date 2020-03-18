import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ItemComponent } from './item/item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxDropDragDemoComponent } from './ngx-drop-drag/ngx-drop-drag-demo/ngx-drop-drag-demo.component';
import { DndListModule } from 'ngx-drag-and-drop-lists';
@NgModule({
   declarations: [
      AppComponent,
      ItemComponent,
      GroupComponent,
      NgxDropDragDemoComponent,
   ],
   imports: [
      BrowserModule,
      DragDropModule,
      DndListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
