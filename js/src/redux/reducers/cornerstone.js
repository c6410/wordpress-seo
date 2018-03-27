import { TOGGLE_CORNERSTONE_CONTENT } from "../actions/cornerstone";

const INITIAL_STATE = false;

/**
 * A reducer for the active keyword.
 *
 * @param {Object} state The current state of the object.
 * @param {Object} action The current action received.
 *
 * @returns {Object} The state.
 */
function cornerstoneReducer( state = INITIAL_STATE, action ) {
	switch( action.type ) {
		case TOGGLE_CORNERSTONE_CONTENT:
			return ! state;
		default:
			return state;
	}
}

export default cornerstoneReducer;
