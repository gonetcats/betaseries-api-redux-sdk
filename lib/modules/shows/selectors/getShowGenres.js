import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select genres from state
 *
 * @alias module:Shows.getShowGenres
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowGenres')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Array}                   List of genres or `undefined`
 */
const getShowGenres = createSelector([commons.getGenres], genres => {
  const objectArray = Object.entries(genres || {});
  const array = [];

  objectArray.forEach(([key, value]) => array.push({ key, value }));

  return array;
});

export default getShowGenres;
