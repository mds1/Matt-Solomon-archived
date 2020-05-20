<template>
  <q-page padding>
    <!-- HEADER TEXT -->
    <div class="text-center">
      <h2>Compound</h2>
      <h2>Lending Rates</h2>
      <h4>Historical APY Data for
        <a
          class="text-h4"
          href="https://compound.finance"
          target="_blank"
        >Compound</a>
      </h4>
    </div>

    <!-- USER TOGGLES -->
    <h5>Settings</h5>
    <div class="row justify-between">
      <!-- Dates -->
      <div class="col-auto defi-toggles shadow-10 q-pa-lg">
        <p><strong>Start & End Dates</strong></p>

        <!-- Start Date -->
        <q-input
          dense
          hide-bottom-space
          filled
          v-model="userOptions.dates.startDate"
          mask="date"
          :rules="['date']"
          placeholder="Start Date"
          class="q-mb-sm"
          style="max-width: 175px"
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="userOptions.dates.startDate"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- End Date -->
        <q-input
          dense
          hide-bottom-space
          filled
          v-model="userOptions.dates.endDate"
          mask="date"
          :rules="['date']"
          placeholder="End Date"
          class="q-mb-sm"
          style="max-width: 175px"
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="userOptions.dates.endDate"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-btn
          color="primary"
          label="Apply"
          @click="generateTimeSeriesFigure(true)"
        />

      </div>

      <!-- Rate types toggle -->
      <div class="col-auto defi-toggles shadow-10 q-pa-lg q-pr-xl">
        <p><strong>Rate Types</strong></p>
        <q-option-group
          v-model="userOptions.rateTypes.group"
          :options="userOptions.rateTypes.options"
          color="primary"
          type="checkbox"
          @input="generateTimeSeriesFigure()"
        />
      </div>

      <!-- Currencies toggle -->
      <div class="col-auto defi-toggles shadow-10 q-pa-lg q-pr-sm">
        <p><strong>Currencies</strong></p>
        <!-- Not using option-group so we have more control over the layout -->
        <div
          class="row"
          style="max-width: 475px;"
        >
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[0].show"
            :label="userOptions.currencies[0].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[1].show"
            :label="userOptions.currencies[1].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[2].show"
            :label="userOptions.currencies[2].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[3].show"
            :label="userOptions.currencies[3].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[4].show"
            :label="userOptions.currencies[4].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[5].show"
            :label="userOptions.currencies[5].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[6].show"
            :label="userOptions.currencies[6].label"
          />
          <q-checkbox
            @input="generateTimeSeriesFigure()"
            class="col-xs-3"
            v-model="userOptions.currencies[7].show"
            :label="userOptions.currencies[7].label"
          />
        </div>
      </div>
    </div>

    <!-- FIGURES SECTION -->
    <h5>Figures</h5>

    <!-- LOADING ANIMATION -->
    <div v-if="!isDataLoaded">
      <div class="horizontal-center text-center">
        <q-spinner-gears
          size="125px"
          color="primary"
        />
        <h6>Fetching data...</h6>
        <p class='text-italic'>
          This may take a minute. If it's not loading, try refreshing the page.
        </p>
      </div>
    </div>

    <!-- FIGURES -->
    <div
      class="shadow-10 q-mb-md"
      id="time-series-figure"
    />

    <div class="row justify-between q-mb-md">
      <div
        class="col shadow-10 q-mr-sm"
        id="average-rates-figure"
      />
      <div
        class="col shadow-10 q-ml-sm"
        id="box-plot"
      />
    </div>

    <div
      class="shadow-10 q-mb-md"
      id="growth-of-investment"
    />

    <br>

  </q-page>
</template>

<script>
import { date } from 'quasar';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty'; // https://lodash.com/docs/4.17.15#isEmpty
import mean from 'lodash/mean'; // https://lodash.com/docs/4.17.15#mean
import figureMixin from 'src/mixins/figureMixin.js';


export default {
  name: 'CompoundRatesPage',

  computed: {
    // Determine what timestamp to start and end at. Take the YYYY/MM/DD input by the user and
    // convert them to a Unix timestamp
    compoundMinBlockTimestamp() {
      const startDate = this.userOptions.dates.startDate.split('/');
      const startDateObject = date.buildDate({
        year: startDate[0], month: startDate[1], date: startDate[2],
      });

      const timestamp = date.formatDate(startDateObject, 'X');
      return String(timestamp);
    },

    compoundMaxBlockTimestamp() {
      const endDate = this.userOptions.dates.endDate.split('/');
      const endDateObject = date.buildDate({
        year: endDate[0], month: endDate[1], date: endDate[2],
      });

      const timestamp = date.formatDate(endDateObject, 'X');
      return String(timestamp);
    },
  },

  data() {
    return {
      // Compound data returned form the API, each item in the array has the rates for a currency
      compoundData: [],

      // Plotted data, also an array
      plottedData: [],

      // Growth of 10k plot data
      growthOf10k: [],

      // True once compoundData has been populated
      isDataLoaded: false,

      // Options for the Compound data
      compoundOptions: {
        // timestampDataStart: '1556496000', // approximate beginning of Compound's API data
        // timestampDataV2: '1558612800', // approximate launch of Compound v2
        // maxBlockTimestamp: String(Math.round((new Date()).getTime() / 1000)), // current timestam
        numBuckets: '100', // API call seems to become unreliable as this number increases
      },

      // User toggles for plot
      userOptions: {
        dates: {
          startDate: '2019/04/01',
          endDate: date.formatDate(Date.now(), 'YYYY/MM/DD'),
        },

        // Toggle for start date
        // minBlockTimestamp: {
        //   group: 'v2Launch',
        //   options: [
        //     { label: 'Compound v2 Launch', value: 'v2Launch' },
        //     { label: 'Compound API Start', value: 'apiStart' },
        //   ],
        // },

        // Toggle for currencies to show
        currencies: [
          { label: 'BAT', show: false, address: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e' },
          { label: 'DAI', show: true, address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643' },
          { label: 'ETH', show: false, address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5' },
          { label: 'REP', show: false, address: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1' },
          { label: 'SAI', show: true, address: '0xf5dce57282a584d2746faf1593d3121fcac444dc' },
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
    this.generateTimeSeriesFigure();
  },

  methods: {
    // lodash methods
    isEmpty,
    mean,

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
              max_block_timestamp: String(this.compoundMaxBlockTimestamp),
              num_buckets: String(this.compoundOptions.numBuckets),
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
    async generateTimeSeriesFigure(fetchData = false) {
      // Call API if data isn't cached -------------------------------------------------------------
      if (isEmpty(this.compoundData) || fetchData) {
        await this.getCompoundData();
      }

      // Configure data for plotting ---------------------------------------------------------------
      const numberOfCurrencies = this.userOptions.currencies.length;
      let plotColorCount = 0;
      const supplyTraces = [];
      const borrowTraces = [];
      const currencyNames = [];

      for (let i = 0; i < numberOfCurrencies; i += 1) {
        // Only plot checked items
        if (!this.userOptions.currencies[i].show) {
          // eslint-disable-next-line no-continue
          continue;
        }

        // Get rates, dates, and generate legend labels
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

          currencyNames.push(currencyName);
        } // end if supply

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
              // Show dashed line if we are also plotting supply
              dash: this.userOptions.rateTypes.group.includes('supply') ? 'dot' : 'solid',
            },
          });

          currencyNames.push(currencyName);
        } // end if borrow

        plotColorCount += 1; // move to the next plot color
      } // end for each currency

      const layout = {
        title: 'Compound Interest Rates (APY)',
        xaxis: {
          title: 'Date',
        },
        yaxis: {
          title: 'Rate',
          ticksuffix: '%',
        },
      };

      // Generate plot -----------------------------------------------------------------------------
      this.isDataLoaded = true;
      const data = [];
      const plottedData = [];


      if (
        this.userOptions.rateTypes.group.includes('supply')
        && this.userOptions.rateTypes.group.includes('borrow')
      ) {
        // If user rquests supply and borrow, add both to our stored data
        // Alternate suply and borrow arrays such that all lines for an asset are paired
        for (let i = 0; i < supplyTraces.length; i += 1) {
          data.push(supplyTraces[i], borrowTraces[i]);
          plottedData.push(
            { data: supplyTraces[i], name: currencyNames[i] },
            { data: borrowTraces[i], name: currencyNames[i] },
          );
        }
      } else if (this.userOptions.rateTypes.group.includes('supply')) {
        // If user only requested supply
        for (let i = 0; i < supplyTraces.length; i += 1) {
          data.push(supplyTraces[i]);
          plottedData.push(
            { data: supplyTraces[i], name: currencyNames[i] },
          );
        }
      } else if (this.userOptions.rateTypes.group.includes('borrow')) {
        // If user only requested borrow
        for (let i = 0; i < borrowTraces.length; i += 1) {
          data.push(borrowTraces[i]);
          plottedData.push(
            { data: borrowTraces[i], name: currencyNames[i] },
          );
        }
      }

      this.plottedData = data;
      const { finalData, finalLayout } = this.prepareLinePlot(data, layout);
      this.$Plotly.newPlot('time-series-figure', finalData, finalLayout, { responsive: true });

      // Generate other plots
      this.generateAverageRatePlot();
      this.generateBoxPlot();
      this.generateGrowthOfInvestmentPlot(supplyTraces);
    },

    /**
     * Generate growth of investment plot
     */
    generateGrowthOfInvestmentPlot(supplyTraces) {
      const traces = [];
      for (let j = 0; j < supplyTraces.length; j += 1) {
        const data = supplyTraces[j];
        const timestamps = data.x;
        const rates = data.y;
        const initialValue = 10000;
        const values = [initialValue];
        for (let i = 0; i < timestamps.length - 1; i += 1) {
          // In above loop, we use length-1 to ignore the current rate
          const deltaT = (timestamps[i + 1].getTime() - timestamps[i].getTime()) / 1000; // in sec
          const presentValue = values[values.length - 1];
          const rate = rates[i] / 100 / 365 / 24 / 3600; // per-second interest rate
          const n = 1; // Math.floor(deltaT / 15); // number of times interest applied per period
          const t = deltaT; // number of time periods elapsed
          const newValue = presentValue * ((1 + rate / n) ** (n * t));
          values.push(newValue);
        }

        traces.push({
          x: timestamps,
          y: values,
          type: 'scatter',
          mode: 'lines',
          name: supplyTraces[j].name.split(' ')[0], // e.g. DAI Supply Rate -> Dai
        });
      }

      // Save off values so we can use them for computing average rates
      this.growthOf10k = traces;

      // Generate figure
      const layout = {
        title: 'Growth of $10,000',
        xaxis: {
          title: 'Date',
        },
        yaxis: {
          title: 'Value',
          tickprefix: '$',
        },
      };
      const { finalData, finalLayout } = this.prepareLinePlot(traces, layout);
      this.$Plotly.newPlot('growth-of-investment', finalData, finalLayout, { responsive: true });
    },

    /**
     * Compute and plots averate rates for selected assets, calculated as CAGR
     */
    generateAverageRatePlot() {
      // Define arrays to hold data
      const currencyNames = [];
      const supplyRates = [];
      const borrowRates = [];

      for (let i = 0; i < this.plottedData.length; i += 1) {
        // Parse out data
        const data = this.plottedData[i];
        const timestamps = data.x;
        const rates = data.y;

        // Get start and end values
        // TODO this is very similar to how growth of 10k plot is generated, so refactor
        // to be more modular
        const initialValue = 10000;
        const values = [initialValue];
        for (let j = 0; j < timestamps.length - 1; j += 1) {
          // In above loop, we use length-1 to skip last value because we use j+1 for deltas
          const deltaT = (timestamps[j + 1].getTime() - timestamps[j].getTime()) / 1000; // in sec
          const presentValue = values[values.length - 1];
          const rate = rates[j] / 100 / 365 / 24 / 3600; // per-second interest rate
          const n = 1; // Math.floor(deltaT / 15); // number of times interest applied per period
          const t = deltaT; // number of time periods elapsed
          const newValue = presentValue * ((1 + rate / n) ** (n * t));
          values.push(newValue);
        }

        const startDate = (new Date(timestamps[0])).getTime() / 1000;
        const endDate = (new Date(timestamps[timestamps.length - 1])).getTime() / 1000;
        const secondsElapsed = endDate - startDate;

        const secondsPerYear = 365.25 * 24 * 3600;
        const numYears = secondsElapsed / secondsPerYear;

        const startValue = values[0];
        const endValue = values[values.length - 1];

        const averageRate = 100 * (((endValue / startValue) ** (1 / numYears)) - 1);

        // Get name data
        const nameComponents = data.name.split(' ');
        const currencyName = nameComponents[0];
        const rateType = nameComponents[1].toLowerCase();

        // Update arrays
        if (!currencyNames.includes(currencyName)) {
          currencyNames.push(currencyName);
        }
        if (rateType === 'supply') {
          supplyRates.push(averageRate);
        } else {
          borrowRates.push(averageRate);
        }
      } // end for each set of plotted data

      // Generate plots
      const data = [];
      if (this.userOptions.rateTypes.group.includes('supply')) {
        data.push({
          x: currencyNames,
          y: supplyRates,
          name: 'Supply',
          type: 'bar',
        });
      }
      if (this.userOptions.rateTypes.group.includes('borrow')) {
        data.push({
          x: currencyNames,
          y: borrowRates,
          name: 'Borrow',
          type: 'bar',
        });
      }

      const layout = {
        barmode: 'group',
        title: 'Average Interest Rates (APY)',
        xaxis: {
          title: 'Currency',
        },
        yaxis: {
          title: 'Rate',
          ticksuffix: '%',
          hoverformat: '.2f',
        },
      };

      this.$Plotly.newPlot('average-rates-figure', data, layout, { responsive: true });
    },

    /**
     * Generates box plots of selected assets
     */
    generateBoxPlot() {
      const traces = [];
      const supplyX = [];
      const supplyY = [];
      const borrowX = [];
      const borrowY = [];
      for (let i = 0; i < this.plottedData.length; i += 1) {
        // Get rates
        const data = this.plottedData[i];
        const rates = data.y;

        // Get name data
        const nameComponents = data.name.split(' ');
        const currencyName = nameComponents[0];
        const rateType = nameComponents[1].toLowerCase();

        if (rateType === 'supply') {
          rates.forEach(() => supplyX.push(currencyName));
          rates.forEach(rate => supplyY.push(rate));
        } else {
          rates.forEach(() => borrowX.push(currencyName));
          rates.forEach(rate => borrowY.push(rate));
        }
      } // end for each set of plotted data

      if (this.userOptions.rateTypes.group.includes('supply')) {
        traces.push({
          x: supplyX,
          y: supplyY,
          name: 'Supply',
          type: 'box',
          boxpoints: 'all',
          jitter: 0.3,
          pointpos: -1.5,
          marker: {
            size: 2,
          },
        });
      }
      if (this.userOptions.rateTypes.group.includes('borrow')) {
        traces.push({
          x: borrowX,
          y: borrowY,
          name: 'Borrow',
          type: 'box',
          boxpoints: 'all',
          jitter: 0.3,
          pointpos: -1.5,
          marker: {
            size: 2,
          },
        });
      }

      const layout = {
        title: 'Interest Rate Distribution (APY)',
        xaxis: {
          title: 'Currency',
        },
        yaxis: {
          title: 'Rate',
          ticksuffix: '%',
          hoverformat: '.2f',
        },
        boxmode: 'group',
      };

      this.$Plotly.newPlot('box-plot', traces, layout, { responsive: true });
    },
  },
};
</script>

<style>
h5 {
  margin-bottom: 0;
}

.defi-toggles {
  background-color: #fff;
}

.helper-text {
  margin-bottom: -1rem;
  font-size: 0.75rem;
  font-style: italic;
}
</style>
