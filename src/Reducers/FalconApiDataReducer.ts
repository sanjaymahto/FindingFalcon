import {fromJS} from 'immutable'
import * as CONSTANTS from './Constants'

// Initializing Immutable state Store
const initialState = fromJS({
    planets_metadata: {},
    vehicles_metadata: {},
    request_token: null,
    falcon_finding_loader: false,
    falcon_finding_response: {}
})

/**
 * This function mutates the supplied state based on
 * the type of the action.
 *
 * @param {Object} [state=initialState] The immutable state.
 * @param {Object} action The action object.
 * @param {String} action.type the string describing the action.
 * @param {object} action.payload The body of the action.
 * @returns {Object} The mutated state.
 */
function falconApiData(state = initialState, action: {type: string; payload: object}) {
    const {type, payload} = action
    switch (type) {
        default:
            return state
    }
}

export default falconApiData
