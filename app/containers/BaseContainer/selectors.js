import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the baseContainer state domain
 */

const selectBaseContainerDomain = state => state.baseContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BaseContainer
 */

const makeSelectBaseContainer = () =>
  createSelector(
    selectBaseContainerDomain,
    substate => substate,
  );

export default makeSelectBaseContainer;
export { selectBaseContainerDomain };
