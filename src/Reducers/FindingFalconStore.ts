import { fromJS } from 'immutable'
import * as CONSTANTS from './Constants'

// Initializing Immutable state Store
const initialState = fromJS({
  planets_metadata: [],
  vehicles_metadata: [],
  authentication_token: null,
  falcon_finding_loader: false,
  falcon_finding_response: {},
})

/**
 * function to set planets metadata into reducer
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function setPlanetsMetadata(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('planets_metadata', payload)
}

/**
 * function to set vehicles metadata into reducer
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function setVehiclesMetadata(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('vehicles_metadata', payload)
}

/**
 * function to set authentication token into reducer
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function setAuthenticationToken(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('authentication_token', payload)
}

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
function falconSearchReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  const { type, payload } = action
  switch (type) {
    case CONSTANTS.SET_PLANET_METADATA:
      return setPlanetsMetadata(state, payload)
    case CONSTANTS.SET_VEHICLE_METADATA:
      return setVehiclesMetadata(state, payload)
    case CONSTANTS.SET_AUTHENTICATION_TOKEN:
      return setAuthenticationToken(state, payload)
    default:
      return state
  }
}

export default falconSearchReducer
