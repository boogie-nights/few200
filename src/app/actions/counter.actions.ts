import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[app counter] incrememnt'
);

export const decrement = createAction(
  '[app counter] decrement'
);

export const reset = createAction(
  '[app counter] reset'
);

export const countBySet = createAction(
  '[app counter] count by set',
  props<{ by: number }>()
);
