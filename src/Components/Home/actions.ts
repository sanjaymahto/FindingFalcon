import * as CONSTANTS from '../../Reducers/Constants'
import {
  getPlanetsData,
  getVehiclesData,
  getAuthenticationTokenData,
  findFalconServiceCall,
} from '../../Services/index'

/**
 * function to set planets data in reducer store
 *
 */
export const setPlanetsData = () => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  dispatch({
    type: CONSTANTS.SHOW_FALCON_FIND_LOADER,
    payload: true,
  })
  const payload = await getPlanetsData()
  dispatch({
    type: CONSTANTS.SET_PLANET_METADATA,
    payload: payload,
  })
  dispatch({
    type: CONSTANTS.SHOW_FALCON_FIND_LOADER,
    payload: false,
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

/**
 * Function to get falcon result
 *
 */
export const findFalconCall = (param: any) => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  dispatch({
    type: CONSTANTS.SET_TOTAL_TIME_TAKEN,
    payload: param.total_time,
  })
  dispatch({
    type: CONSTANTS.SHOW_FALCON_FIND_LOADER,
    payload: true,
  })
  const payload = await findFalconServiceCall(param)
  dispatch({
    type: CONSTANTS.SET_FIND_FALCON_RESULT,
    payload: payload,
  })
  dispatch({
    type: CONSTANTS.SHOW_FALCON_FIND_LOADER,
    payload: false,
  })
}
