import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: TodoItem[] = [
    { id: '1', description: 'Buy a christmas tree', completed: false },
    { id: '2', description: 'Buy laundry detergent', completed: true }
  ];

  constructor() { }

  ngOnInit() {
  }

}
