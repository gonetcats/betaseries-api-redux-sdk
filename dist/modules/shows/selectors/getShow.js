'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select show from state
 *
 * @alias module:Shows.getShow
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Show element or `null`
 */
var getShow = (0, _reselect.createSelector)([commons.getShows, commons.getShowId], function (shows, showId) {
  return !Object.prototype.hasOwnProperty.call(shows, showId) ? null : shows[showId];
});

exports.default = getShow;