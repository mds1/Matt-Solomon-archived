export function setCompoundRates(state, payload) {
  /**
   * payload is the response from the Compound API, and the data field contains all the data we
   * are interested in:
   *    asset: the asset requested
   *    borrow_rates: array of objects, each object contains block_number, block_timestamp, and rate
   *    error: object containing error_code, field_errors object, and message
   *    supply_rates: array of objects, each object contains block_number, block_timestamp, and rate
   *    total_borrows_history: array of objects, each object contains block_number, block_timestamp,
   *      and total
   *    total_supply_history: array of objects, each object contains block_number, block_timestamp,
   *      and total
   */
  state.compoundData = payload.data;
}
