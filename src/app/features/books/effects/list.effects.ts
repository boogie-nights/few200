import { Injectable } from '@angular/core';
import { BookEntity } from '../reducers/list.reducer';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';

@Injectable()
export class ListEffects {

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addBook),
      map(a => a.payload),
      switchMap(originalBook => this.client.post<BookEntity>('http://localhost:3000/books',
        {
          title: originalBook.title,
          author: originalBook.author,
          format: originalBook.format
        }).pipe(map(addedBook => listActions.addBookSuccess({ oldId: originalBook.id, payload: addedBook }))))
    )
  );

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStart),
      switchMap(() =>
        this.client.get<GetAllResponse>('http://localhost:3000/books')
          .pipe(
            map(response => response.books),
            map(books => listActions.loadBooksSuccess({ books }))
          )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetAllResponse {
  books: BookEntity[];
}
