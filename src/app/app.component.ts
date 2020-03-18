import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Item } from './model/item';
import { Group } from './model/group';
import { Subject, Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subject = new Subject();
  observable: Observable<any>;

  todo: Item[] = [
    { title: 'Get to work', color: 'red' },
    { title: 'Pick up groceries', color: 'yellow' },
    { title: 'Go home', color: 'blue' },
    { title: 'Fall asleep', color: 'gray' }
  ];
  title = 'cdk-drop-drag-demo';
  listTodo: Group[] = [];
  idConnectedTos = ['watingField'];
  watingField: Item[] = [];

  ngOnInit(): void {
    const currentId = this.listTodo.length.toString();
    this.idConnectedTos.push(currentId);
    this.listTodo.push({ id: currentId, items: this.todo });
    this.observable = this.subject.asObservable();
    this.observable.pipe(debounceTime(100)).subscribe(event => {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    this.subject.next(event);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addNewItem() {
    const ranColor = this.getRandomColor();
    this.watingField.push({ title: ranColor, color: ranColor });
  }

  addOrRemoveRow() {
    const currentId = this.listTodo.length.toString();
    this.idConnectedTos.push(currentId);
    this.listTodo.push({ id: currentId, items: [] });
  }

  addNewGroup() {
    const ranColor1 = this.getRandomColor();
    const ranColor2 = this.getRandomColor();
    const currentId = 'group_' + this.watingField.length.toString();
    this.idConnectedTos.push(currentId);
    this.watingField.push({
      isHasGroup: true,
      group: {
        id: currentId,
        items: [
          { title: ranColor1, color: ranColor1 },
          { title: ranColor2, color: ranColor2 }
        ]
      }
    });
  }

  listGroupConnectTo(exceptId): string[] {
    return this.idConnectedTos.filter(id => id !== exceptId);
  }
}
