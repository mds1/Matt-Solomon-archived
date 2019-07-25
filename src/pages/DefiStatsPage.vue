<template>
  <q-page padding>
    <h2 class="center-text">Decentralized</h2>
    <h2 class="center-text">Lending Stats</h2>

    <q-inner-loading :showing="!isDataLoaded">
      <q-spinner-gears
        size="50px"
        color="primary"
      />
      <p>
        Loading data...
      </p>
    </q-inner-loading>
    <div
      class="shadow-4"
      id="defi-rates-figure"
    />

  </q-page>
</template>

<script>
import isEmpty from 'lodash/isEmpty'; // https://lodash.com/docs/4.17.15#isEmpty
import figureMixin from 'src/mixins/figureMixin.js';


export default {
  name: 'DefiStatsPage',

  data() {
    return {
      // Options for the Compound data
      compoundOptions: {
        timestampDataStart: '1556496000', // approximate beginning of Compound's API data
        timestampDataV2: '1558612800', // approximate launch of Compound v2
      },
      // Parameters for the Compound API call
      compoundParams: {
        asset: this.$store.state.defi.assetMap.cDAI,
        min_block_timestamp: '1558612800', // default is set to Compound v2 launch
        max_block_timestamp: String(Math.round((new Date()).getTime() / 1000)), // cuurent timestamp
        num_buckets: '100',
      },
      isDataLoaded: false,
    };
  },

  mixins: [figureMixin],

  created() {
    this.$store.dispatch('defi/getCompoundRates', this.compoundParams);
  },

  mounted() {
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case 'defi/setCompoundRates':
          // We his this case one the data from our action in the created hook has been returned
          this.isDataLoaded = true;
          console.log(this.compoundParams.min_block_timestamp);
          this.generateFigure();
          break;
        default:
          break;
      }
    });
  },

  methods: {
    isEmpty, // lodash method

    generateFigure() {
      // Get and parse data ------------------------------------------------------------------------
      const { compoundData } = this.$store.state.defi;
      const borrowRates = compoundData.borrow_rates;
      const supplyRates = compoundData.supply_rates;

      const supply = {
        dates: supplyRates.map(obj => new Date(obj.block_timestamp * 1000)),
        rates: supplyRates.map(obj => obj.rate * 100),
      };

      const borrow = {
        dates: borrowRates.map(obj => new Date(obj.block_timestamp * 1000)),
        rates: borrowRates.map(obj => obj.rate * 100),
      };


      // Configure data for plotting ---------------------------------------------------------------
      const trace1 = {
        x: supply.dates,
        y: supply.rates,
        type: 'lines',
        name: 'Supply Rates',
        marker: {
          color: this.colors.blue,
        },
      };
      const trace2 = {
        x: borrow.dates,
        y: borrow.rates,
        type: 'lines',
        name: 'Borrow Rates',
        marker: {
          color: this.colors.blue,
        },
        line: {
          dash: 'dot',
        },
      };

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
      const data = [trace1, trace2];
      const { finalData, finalLayout } = this.prepareLinePlot(data, layout);
      this.$Plotly.newPlot('defi-rates-figure', finalData, finalLayout, { responsive: true });
    },
  },
};
</script>

<style>
</style>
