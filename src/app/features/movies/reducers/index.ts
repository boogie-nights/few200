import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieListItem } from '../models';

export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. Feature Selector
const selectMoviesFeature = createFeatureSelector<MoviesState>(featureName);

// 2. Selector Per Branch
const selectListBranch = createSelector(selectMoviesFeature, m => m.list);

const { selectAll: selectMovieListArray } = fromList.adapter.getSelectors(selectListBranch);
// 3. helpers (optional)

// 4. What the components need

// Todo: we need a selector that returns a MovieListItem[] for our lsit
export const selectMovieListItems = createSelector(
  selectMovieListArray,
  (movies) => movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    rentalPrice: movie.rentalPrice,
    rentalDays: movie.rentalDays,
    isTemporary: movie.id.startsWith('T')
  } as MovieListItem)));
