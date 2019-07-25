import axios from 'axios';

/**
 *
 * @param {Object} context Standard Vuex context object
 * @param {Object} compoundParams contains asset, min_block_timestamp, max_block_timestamp, and
 * num_buckets field for the Compound API
 */
export async function getCompoundRates({ commit }, compoundParams) {
  const url = 'https://api.compound.finance/api/v2/market_history/graph';
  const response = await axios.get(url, {
    params: {
      asset: compoundParams.asset,
      min_block_timestamp: compoundParams.min_block_timestamp,
      max_block_timestamp: compoundParams.max_block_timestamp,
      num_buckets: compoundParams.num_buckets,
    },
  });
  commit('setCompoundRates', response);
}
