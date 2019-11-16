import { fromJS } from 'immutable'
import * as CONSTANTS from './Constants'

// Initializing Immutable state Store
const initialState = fromJS({
  planets_metadata: [],
  vehicles_metadata: [],
  authentication_token: null,
  falcon_finding_loader: false,
  total_time_taken: null,
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
  return state.set('authentication_token', payload.token)
}

/**
 * function to set find falcon result into reducer
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function setFindFalconResult(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('falcon_finding_response', payload)
}

/**
 * function to show/hide finding falcon loader
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function showLoader(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('falcon_finding_loader', payload)
}

/**
 * function to set total time taken
 *
 * @param  {Object} state - state Object
 * @param  {Object} payload - payload Object
 */
function setTimeTaken(
  state: { set: (arg0: string, arg1: any) => void },
  payload: any
) {
  return state.set('total_time_taken', payload)
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
    case CONSTANTS.SHOW_FALCON_FIND_LOADER:
      return showLoader(state, payload)
    case CONSTANTS.SET_TOTAL_TIME_TAKEN:
      return setTimeTaken(state, payload)
    case CONSTANTS.SET_FIND_FALCON_RESULT:
      return setFindFalconResult(state, payload)
    default:
      return state
  }
}

export default falconSearchReducer
