/**
 * Mixin for providing data for plots and figures
 */

import merge from 'lodash/merge'; // https://lodash.com/docs/4.17.11#merge

export default {


  data() {
    return {
      colors: {
        // Default plotly colors, from https://stackoverflow.com/a/44727682
        blue: '#1f77b4', // muted blue
        orange: '#ff7f0e', // safety orange
        green: '#2ca02c', // cooked asparagus green
        red: '#d62728', // brick red
        purple: '#9467bd', // muted purple
        brown: '#8c564b', // chestnut brown
        pink: '#e377c2', // raspberry yogurt pink
        gray: '#7f7f7f', // middle gray
        yellowGreen: '#bcbd22', // curry yellow-green
        blueTeal: '#17becf', // blue-teal
        black: '#000000', // black
      },
      lineSettings: {
        // Settings for line plots
        line: { width: 3 },
      },
      layout: {
        // Set transparent background
        // paper_bgcolor: '#00000000',
        // plot_bgcolor: '#00000000',
        paper_bgcolor: '#fff',
        plot_bgcolor: '#fff',
        // x-axis properties
        xaxis: {
          gridcolor: '#00000044',
          gridwidth: 1,
        },
        // y-axis properties
        yaxis: {
          automargin: true,
          gridcolor: '00000044',
          gridwidth: 1,
        },
        // configure plot margins
        margin: {
          l: 60,
          r: 50,
          b: 75,
          t: 100,
          pad: 4,
        },
      },
    };
  },
  methods: {

    /**
     * Merge provided layout parameters with our template parameters
     * @param {Object} layout layout object for an individual figure
     */
    mergeLayout(layout) {
      return merge(layout, this.layout);
    },

    /**
     * Take a specific plots data and layout parameters and merge them with the template parameters
     * @param {Array} data The traces of data to plot
     * @param {Object} layout layout object for an individual figure
     */
    prepareLinePlot(data, layout) {
      // For each data source, merge the settings
      const finalData = [];
      for (let i = 0; i < data.length; i += 1) {
        finalData[i] = merge(data[i], this.lineSettings);
      }
      // Merge layout settings
      const finalLayout = this.mergeLayout(layout);
      // Return updated objects
      return { finalData, finalLayout };
    },

  },
};
