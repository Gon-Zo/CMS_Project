/**
 * action type 성공 시
 *
 * @param actionType
 * @returns {string}
 * @constructor
 */
export const SUCCESS = actionType => `${actionType}_FULFILLED`

/**
 * action type 보류 시
 *
 * @param actionType
 * @returns {string}
 * @constructor
 */
export const REQUEST = actionType => `${actionType}_PENDING`

/**
 * action type 실패 시
 *
 * @param actionType
 * @returns {string}
 * @constructor
 */
export const FAILURE = actionType => `${actionType}_REJECTED`
