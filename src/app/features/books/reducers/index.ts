import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';

export const featureName = 'booksFeature';

export interface BooksState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Feature Selector
export const selectBooksFeature = createFeatureSelector<BooksState>(featureName);

// Selector Per Branch
export const selectListBranch = createSelector(selectBooksFeature, book => book.list);

// Helpers
export const { selectAll: selectBookListArray } = fromList.adapter.getSelectors(selectListBranch);

// What the components needs

export const selectBookListItems = createSelector(
  selectBookListArray,
  (books) => books.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    format: book.format
  } as BookListItem)));

