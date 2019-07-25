<template>
  <q-page padding>
    <!-- HEADER TEXT -->
    <div class="text-center">
      <h2>Compound</h2>
      <h2>Lending Rates</h2>
      <h4>Historical lending rates for
        <a
          class="text-h4"
          href="https://compound.finance"
        >Compound</a>
      </h4>
    </div>

    <!-- LOADING ANIMATION -->
    <q-inner-loading :showing="!isDataLoaded">
      <q-spinner-gears
        size="50px"
        color="primary"
      />
      <p><strong>Loading data...</strong></p>
    </q-inner-loading>

    <!-- USER TOGGLES -->
    <div class="row justify-between">
      <!-- Start date toggle -->
      <div class="col-auto defi-toggles shadow-4 q-pa-lg q-pr-xl">
        <p><strong>Start Date</strong></p>
        <q-option-group
          v-model="userOptions.minBlockTimestamp.group"
          :options="userOptions.minBlockTimestamp.options"
          color="primary"
          @input="generateFigure(true)"
        />
        <p class='helper-text'>Start dates are approximate</p>
      </div>

      <!-- Rate types toggle -->
      <div class="col-auto defi-toggles shadow-4 q-pa-lg q-pr-xl">
        <p><strong>Rate Types</strong></p>
        <q-option-group
          v-model="userOptions.rateTypes.group"
          :options="userOptions.rateTypes.options"
          color="primary"
          type="checkbox"
          @input="generateFigure()"
        />
      </div>

      <!-- Currencies toggle -->
      <div class="col-auto defi-toggles shadow-4 q-pa-lg q-pr-sm">
        <p><strong>Currencies</strong></p>
        <!-- Not using option-group so we have more control over the layout -->
        <div class="row">
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[0].show"
            :label="userOptions.currencies[0].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[1].show"
            :label="userOptions.currencies[1].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[2].show"
            :label="userOptions.currencies[2].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[3].show"
            :label="userOptions.currencies[3].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[4].show"
            :label="userOptions.currencies[4].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[5].show"
            :label="userOptions.currencies[5].label"
          />
          <q-checkbox
            @input="generateFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[6].show"
            :label="userOptions.currencies[6].label"
          />
        </div>
      </div>
    </div>

    <!-- FIGURE -->
    <br>
    <div
      class="shadow-4"
      id="defi-rates-figure"
    />
    <br>

  </q-page>
</template>

<script>
import axios from 'axios';
import isEmpty from 'lodash/isEmpty'; // https://lodash.com/docs/4.17.15#isEmpty
import figureMixin from 'src/mixins/figureMixin.js';


export default {
  name: 'DefiStatsPage',

  computed: {
    // Parameters for the Compound API call
    compoundMinBlockTimestamp() {
      // Determine what timestamp to start at
      switch (this.userOptions.minBlockTimestamp.group) {
        case 'v2Launch':
          return this.compoundOptions.timestampDataV2;
        case 'apiStart':
          return this.compoundOptions.timestampDataStart;
        default:
          return this.compoundOptions.timestampDataV2;
      }
    },
  },

  data() {
    return {
      // Compound data returned form the API
      compoundData: [],

      // Options for the Compound data
      compoundOptions: {
        timestampDataStart: '1556496000', // approximate beginning of Compound's API data
        timestampDataV2: '1558612800', // approximate launch of Compound v2
      },

      compoundParams: {
        asset: this.$store.state.defi.assetMap.cDAI,
        maxBlockTimestamp: String(Math.round((new Date()).getTime() / 1000)), // cuurent timestamp
        numBuckets: '100',
        // Map of asset names to contract addresses, from https://compound.finance/developers
        assetMap: {
          cBAT: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e',
          cDAI: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
          cETH: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
          cREP: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1',
          cUSDC: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
          cWBTC: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
          cZRX: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
        },
      },

      isDataLoaded: false,
      // User toggles
      userOptions: {
        // Toggle for start date
        minBlockTimestamp: {
          group: 'v2Launch',
          options: [
            { label: 'Compound v2 Launch', value: 'v2Launch' },
            { label: 'Compund API Start', value: 'apiStart' },
          ],
        },
        // Toggle for currencies to show
        currencies: [
          { label: 'BAT', show: false, address: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e' },
          { label: 'DAI', show: true, address: '0xf5dce57282a584d2746faf1593d3121fcac444dc' },
          { label: 'ETH', show: false, address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5' },
          { label: 'REP', show: false, address: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1' },
          { label: 'USDC', show: false, address: '0x39aa39c021dfbae8fac545936693ac917d5e7563' },
          { label: 'WBTC', show: false, address: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4' },
          { label: 'ZRX', show: false, address: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407' },
        ],
        // Rate types to show
        rateTypes: {
          group: ['supply', 'borrow'],
          options: [
            { label: 'Supply', value: 'supply' },
            { label: 'Borrow', value: 'borrow' },
          ],
        },
      },
    };
  },

  mixins: [figureMixin],

  mounted() {
    this.generateFigure();
  },

  methods: {
    isEmpty, // lodash method

    /**
     * Fetch data from Compound's API for all assets
     */
    async getCompoundData() {
      // Set status flag to mention we don't have data
      this.isDataLoaded = false;

      // Call API for each asset
      // First we add all API requests to an array
      const url = 'https://api.compound.finance/api/v2/market_history/graph';
      const promises = [];
      this.userOptions.currencies.forEach((currency) => {
        promises.push(
          axios.get(url, {
            params: {
              asset: String(currency.address),
              min_block_timestamp: String(this.compoundMinBlockTimestamp),
              max_block_timestamp: String(this.compoundParams.maxBlockTimestamp),
              num_buckets: String(this.compoundParams.numBuckets),
            },
          }),
        );
      });

      // Then we fetch all promises
      const responses = await Promise.all(promises);
      this.compoundData = responses;
      this.isDataLoaded = true;
    },

    /**
     * Use Compound API response to generate plots
     * @param {Boolean} fetchData If true, data is re-fetched instead of using cached data
     */
    async generateFigure(fetchData = false) {
      // Call API if data isn't cached -------------------------------------------------------------
      if (isEmpty(this.compoundData) || fetchData) {
        await this.getCompoundData();
      }

      // Configure data for plotting ---------------------------------------------------------------
      const numberOfCurrencies = this.userOptions.currencies.length;
      let plotColorCount = 0;
      const supplyTraces = [];
      const borrowTraces = [];

      for (let i = 0; i < numberOfCurrencies; i += 1) {
        if (!this.userOptions.currencies[i].show) {
          // Only plot checked items
          // eslint-disable-next-line no-continue
          continue;
        }

        const supplyData = this.compoundData[i].data.supply_rates;
        const borrowData = this.compoundData[i].data.borrow_rates;

        const supplyRates = supplyData.map(obj => obj.rate * 100);
        const borrowRates = borrowData.map(obj => obj.rate * 100);

        const supplyDates = supplyData.map(obj => new Date(obj.block_timestamp * 1000));
        const borrowDates = borrowData.map(obj => new Date(obj.block_timestamp * 1000));

        const currencyName = this.userOptions.currencies[i].label;
        const supplyLegendLabel = `${currencyName} Supply Rate`;
        const borrowLegendLabel = `${currencyName} Borrow Rate`;

        // Add data for supply trace
        if (this.userOptions.rateTypes.group.includes('supply')) {
          supplyTraces.push({
            x: supplyDates,
            y: supplyRates,
            type: 'lines',
            name: supplyLegendLabel,
            marker: {
              color: this.colorArray[plotColorCount],
            },
          });
        }

        // Add data for borrow trace
        if (this.userOptions.rateTypes.group.includes('borrow')) {
          borrowTraces.push({
            x: borrowDates,
            y: borrowRates,
            type: 'lines',
            name: borrowLegendLabel,
            marker: {
              color: this.colorArray[plotColorCount],
            },
            line: {
              dash: 'dot',
            },
          });
        }

        plotColorCount += 1;
      }


      const layout = {
        title: 'Compund Interest Rates',
        xaxis: {
          title: 'Date',
        },
        yaxis: {
          title: 'Rate',
          ticksuffix: '%',
        },
        legend: {
          // x: 0.1,
          // y: 1,
        },
      };

      // Generate plot -----------------------------------------------------------------------------
      this.isDataLoaded = true;
      // Alternate suply and borrow arrays such that all lines for an asset are paired
      const data = [];
      for (let i = 0; i < supplyTraces.length; i += 1) {
        data.push(supplyTraces[i], borrowTraces[i]);
      }
      const { finalData, finalLayout } = this.prepareLinePlot(data, layout);
      this.$Plotly.newPlot('defi-rates-figure', finalData, finalLayout, { responsive: true });
    },
  },
};
</script>

<style>
.defi-toggles {
  background-color: #fff;
}

.helper-text {
  margin-bottom: -1rem;
  font-size: 0.75rem;
  font-style: italic;
}
</style>
