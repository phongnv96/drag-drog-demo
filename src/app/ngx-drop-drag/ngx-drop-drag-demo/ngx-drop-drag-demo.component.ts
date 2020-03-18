import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-ngx-drop-drag-demo',
  templateUrl: './ngx-drop-drag-demo.component.html',
  styleUrls: ['./ngx-drop-drag-demo.component.css']
})
export class NgxDropDragDemoComponent implements OnInit {
  constructor() {}
  public simpleList: Item[][] = [
    [
      { id: '1', title: 'John', color: 'red' },
      { id: '2', title: 'Smith', color: 'blue' },
      { id: '3', title: 'George', color: 'yellow' }
    ],
    []
  ];

  public nestedList: Item[][] = [
    [
      { id: '1', title: 'John', color: 'red', type: 'item' },
      { id: '2', title: 'Smith', color: 'blue', type: 'item' },
      {
        id: '3',
        title: 'George',
        color: 'yellow',
        type: 'container',
        isHasChildItem: true,
        items: [
          { id: '1', title: 'container_John', color: 'red', type: 'item' },
          { id: '2', title: 'container_Smith', color: 'blue', type: 'item' },
          { id: '3', title: 'container_George', color: 'yellow', type: 'item' }
        ]
      },
      {
        id: '3',
        title: 'George',
        color: 'yellow',
        type: 'container',
        isHasChildItem: true,
        items: [
          { id: '1', title: 'container_John', color: 'red', type: 'item' },
          { id: '2', title: 'container_Smith', color: 'blue', type: 'item' },
          { id: '3', title: 'container_George', color: 'yellow', type: 'item' }
        ]
      }
    ],
    [
      { id: '2-1', title: '2-1.John', color: 'red', type: 'item' },
      { id: '2-2', title: '2-2.Smith', color: 'blue', type: 'item' },
    ]
  ];

  ngOnInit() {}
  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }
}
