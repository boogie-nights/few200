import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';
// TypeScript

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// This is what our module craves.
export const reducers = {

  counter: fromCounter.reducer

};

// Selectors (selector functions)

// 1. if this is a feature, create a "feature selector"

// 2. Create a selector for each "branch" of the state.
const selectCounterBranch = (state: ApplicationState) => state.counter;

// 3. Create "Helpers" (optional)

// 4. Create the selectors you ened for the components

// TODO: We need a function that returns the current value of the counter.
export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectFizz = createSelector(selectCurrentCount, count => (count % 3) === 0);
export const selectBuzz = createSelector(selectCurrentCount, count => (count % 5) === 0);
export const selectFizzBuzz = createSelector(selectFizz, selectBuzz, (fizz, buzz) => (fizz && buzz));

export const selectDecrememntDisabled = createSelector(
  selectCurrentCount,
  selectCountingBy,
  (current, by) => current - by < 0
);
