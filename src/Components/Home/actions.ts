import * as CONSTANTS from '../../Reducers/Constants'
import {
  getPlanetsData,
  getVehiclesData,
  getAuthenticationTokenData,
} from '../../Services/index'

/**
 * function to set planets data in reducer store
 *
 */
export const setPlanetsData = () => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  const payload = await getPlanetsData()
  dispatch({
    type: CONSTANTS.SET_PLANET_METADATA,
    payload: payload,
  })
}

/**
 * function to set vehicles data in reducer store
 *
 */
export const setVehiclesData = () => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  const payload = await getVehiclesData()
  dispatch({
    type: CONSTANTS.SET_VEHICLE_METADATA,
    payload: payload,
  })
}

/**
 * function to get Authentication Token
 *
 */
export const setAuthenticationToken = () => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  const payload = await getAuthenticationTokenData()
  dispatch({
    type: CONSTANTS.SET_AUTHENTICATION_TOKEN,
    payload: payload,
  })
}
