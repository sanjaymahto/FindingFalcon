import {
  getPlanets,
  getVehicles,
  getAuthenticationToken,
  findFalconResult,
} from './Api'

/**
 * function to get planets
 *
 */
export function getPlanetsData() {
  return getPlanets()
    .then(res => res.json())
    .then(res => res.data)
}

/**
 * function to get vehicles
 *
 */
export function getVehiclesData() {
  return getVehicles()
    .then(res => res.json())
    .then(res => res.data)
}

/**
 * function to get Authentication token
 *
 */
export function getAuthenticationTokenData() {
  return getAuthenticationToken()
    .then(res => res.json())
    .then(res => res.data)
}

/**
 * function to get the find falcon results
 *
 * @param  {Object} params body params
 */
export function findFalconServiceCall(params: object) {
  return findFalconResult(params)
    .then(res => res.json())
    .then(data => data)
}
