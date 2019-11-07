import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from './models';
import { BooksState, selectBookListItems } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookListItems);
  }

}
