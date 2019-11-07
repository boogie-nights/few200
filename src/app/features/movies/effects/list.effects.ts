import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
import { MovieEntity } from '../reducers/list.reducer';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {

  // Adding a movie
  // When we get an addedMovie -> addedMovieSuccess | addedMovieFailure

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addMovie),
      map(a => a.payload),
      switchMap(originalMovie => this.client.post<MovieEntity>('http://localhost:3000/movies',
        {
          title: originalMovie.title,
          rentalPrice: originalMovie.rentalPrice,
          rentalDays: originalMovie.rentalDays
        }).pipe(map(addedMovie => listActions.addMovieSuccess({ oldId: originalMovie.id, payload: addedMovie }))))
    )
  );


  // on application start, it is going to go get movies from the API, and on:
  // Success - return the list of movies in an action
  // Failure - do something else.

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStart),
      switchMap(() =>
        this.client.get<GetAllResponse>('http://localhost:3000/movies')
          .pipe(
            map(response => response.movies), // { movies: MovieEntity[] } => MovieEntity[]
            map(movies => listActions.loadMoviesSuccess({ movies }))
          )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetAllResponse {
  movies: MovieEntity[];
}
