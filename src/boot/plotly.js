// Plotly setup instructions from https://github.com/plotly/plotly.js
import Plotly from 'plotly.js-dist';

// leave the export, even if you don't use it
export default ({ Vue }) => {
  Vue.prototype.$Plotly = Plotly;
};
