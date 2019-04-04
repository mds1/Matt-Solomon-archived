/**
 * name: string, project name
 * description: string (HTML supported), project description
 * tools: array of objects, where each tool contains the tool name and URL
 * urlGit: string, URL to project's GitLab/GitHub page
 * urlHome: string, URL to project's home page
 * imgPath: string, path to image to show
 * showIf: boolean, whether or not the project should be displayed
 */
const items = [
  {
    name: 'NFL Survivor',
    description: `A standard NFL survivor pool implemented with Ethereum. Note
      that this project is no longer maintained and no longer works properly.
      However, it can be built and re-deployed from the source code on GitHub.`,
    tools: [
      { name: 'Vue', url: 'https://vuejs.org/' },
      { name: 'Quasar Framework', url: 'https://quasar-framework.org' },
      { name: 'MySportsFeeds API', url: 'https://www.mysportsfeeds.com/' },
      { name: 'Truffle Suite', url: 'https://truffleframework.com/' },
      { name: 'Ganache CLI', url: 'https://github.com/trufflesuite/ganache-cli' },
      { name: 'Infura', url: 'https://infura.io/' },
      { name: 'Provable (formerly Oraclize)', url: 'https://provable.xyz/' },
      { name: 'Node', url: 'https://nodejs.org/en/' },
      { name: 'Express', url: 'https://expressjs.com' },
    ],
    urlGit: 'https://github.com/mds1/survivor-frontend',
    urlHome: 'https://survivor-frontend.netlify.com/',
    imgPath: 'statics/projects/blockchain/survivor.png',
    showIf: true,
  },
  {
    name: 'Send ETH Transactions',
    description: `Simple webapp to send Ethereum transactions using MetaMask,
      with Ethereum Name Service (ENS) support.`,
    tools: [
      { name: 'Vue', url: 'https://vuejs.org/' },
      { name: 'Quasar Framework', url: 'https://quasar-framework.org' },
      { name: 'Infura', url: 'https://infura.io/' },
      { name: 'Ethereum Name Service (ENS)', url: 'https://ens.domains' },
    ],
    urlGit: 'https://github.com/mds1/send-eth-tx',
    urlHome: 'https://sendethtx.netlify.com/',
    imgPath: 'statics/projects/blockchain/sendtx.png',
    showIf: true,
  },
  {
    name: 'KeyStats',
    description: `Enter an Ethereum address and get various figures, tables,
      and plots summarizing transactions of that address.
      <i>
        This site is currently broken, as CoinMarketCap has since changed
        their API.
      </i>`,
    tools: [
      { name: 'Etherscan API', url: 'https://etherscan.io' },
      { name: 'CoinMarketCap API', url: 'https://coinmarketcap.com' },
    ],
    urlGit: 'https://github.com/mds1/KeyStats',
    urlHome: 'https://keystats.netlify.com/',
    imgPath: 'statics/projects/blockchain/keystats.png',
    showIf: true,
  },
];

// For each item, add ID's based on the order they are in
items.forEach((item, index) => {
  item.id = index;
});

// Export the list with the IDs added and give it a meaningful name
export const projects = items;
