import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();
// const initialState: State = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'A Series of Unfortunate Events: The Bad Beginning', author: 'Lemony Snickett', format: 'HardCover' },
//     2: { id: '2', title: 'A Series of Unfortunate Events: The Reptile Room', author: 'Lemony Snickett', format: 'HardCover' }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadBooksSuccess, (state, action) => adapter.addAll(action.books, state)),
  on(actions.addBookSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  })
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



