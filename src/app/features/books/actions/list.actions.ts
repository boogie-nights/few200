import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let id = 1;

export const addBook = createAction(
  '[books] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      author,
      format
    } as BookEntity
  })
);

export const loadBooksSuccess = createAction(
  '[books] loaded books successfully',
  props<{ books: BookEntity[] }>()
);

export const addBookSuccess = createAction(
  '[books] added book successfully',
  props<{ oldId: string, payload: BookEntity }>()
);
