import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input() model: BookListItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
