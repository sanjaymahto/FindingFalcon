import {
  SERVER_URL,
  FETCH_PLANETS_DATA,
  FETCH_VEHICLES_DATA,
  FETCH_AUTHENTICATION_TOKEN,
  FIND_FALCON,
} from './Constants'

/**
 * function to generate the body for post request
 *
 * @param  {String} params - body params
 */
function post_bodyGenerator(params: string) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: params,
  }
}

/**
 * function to generate the body for post request
 *
 */
function get_bodyGenerator() {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
}

/**
 * function to fetch Planets data from the server
 *
 * @return {Promise} Promise
 */
export function getPlanets() {
  return fetch(`${SERVER_URL}${FETCH_PLANETS_DATA}`, get_bodyGenerator())
}

/**
 * function to fetch vehicles data from the servers
 *
 * @return {Promise} Promise
 */
export function getVehicles() {
  return fetch(`${SERVER_URL}${FETCH_VEHICLES_DATA}`, get_bodyGenerator())
}

/**
 * function to fetch authentication token from servers
 *
 * @return {Promise} Promise
 */
export function getAuthenticationToken() {
  let params = JSON.stringify({})
  return fetch(
    `${SERVER_URL}${FETCH_AUTHENTICATION_TOKEN}`,
    post_bodyGenerator(params)
  )
}

/**
 * function to fetch find results
 *
 * @param {Object} body params
 * @return {Promise} Promise
 */
export function findFalconResult(params: object) {
  let body = JSON.stringify(params)
  return fetch(`${SERVER_URL}${FIND_FALCON}`, post_bodyGenerator(body))
}
