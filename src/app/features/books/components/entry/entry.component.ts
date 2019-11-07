import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { BooksState } from '../../reducers';
import { Store } from '@ngrx/store';
import { addBook } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {
    const bookToAdd = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };

    this.store.dispatch(addBook({ ...bookToAdd }));

    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = 'Hardcover';
    titleEl.focus();
  }
}
