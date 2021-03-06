/**
 * List of resources to display on the resource page. Each resource must contain
 * the following fields:
 *    name: string, the name of the resource
 *    description: description of the resource
 *    url: string, the URL to the resource
 *    category: string, category the item falls in, e.g. blockchain, webdev, etc.
 *    subcategory: string, subcategory of item
 *    moreInfo: string, additional information and details that can be shown
 *    showIf: boolean, whether or not to show a resource
 */

// Define available categories
export const categories = {
  blockchain: {
    text: 'Blockchain & Decentralization',
    subcategories: {
      general: 'General',
      stablecoins: 'Stablecoins',
      storage: 'Storage',
      // consensus: 'Consensus Mechanisms',
    },
  },
  webdev: {
    text: 'Web Development',
    subcategories: {
      design: 'Design',
    },
  },
  gnc: {
    text: 'Guidance, Navigation, & Control',
    subcategories: {
      navigation: 'Navigation',
    },
  },
  automation: {
    text: 'Automation',
    subcategories: {
      algorithms: 'Algorithms',
    },
  },
  misc: {
    text: 'Miscellaneous',
    subcategories: {
      // finance: 'Finance',
      general: 'General',
    },
  },
};

// Define questions
const resourceList = [
  // ===========================================================================
  //                                BLOCKCHAINS
  // ===========================================================================
  {
    name: 'Maker for Dummies: A Plain English Explanation of the Dai Stablecoin',
    description: 'A fairly detailed introduction and overview of Dai',
    url: 'https://medium.com/cryptolinks/maker-for-dummies-a-plain-english-explanation-of-the-dai-stablecoin-e4481d79b90',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.stablecoins,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'MakerDAO',
    description: 'Good article covering the basics of Dai, MKR, and MakerDAO',
    url: 'https://longcaller.com/coin/maker-dao.html',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.stablecoins,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'MakerDao Articles, Blog Posts and Tutorials',
    description: 'Post containing dozens of links to resources about Dai, MakerDAO, etc.',
    url: 'https://www.reddit.com/r/MakerDAO/comments/8k8h51/makerdao_articles_blog_posts_and_tutorials/',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.stablecoins,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Getting Started With Maker',
    description: 'Post containing links about using and creating Dai',
    url: 'https://www.reddit.com/r/MakerDAO/comments/8jsalu/getting_started_with_maker/',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.stablecoins,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'IPFS Gateway Checker',
    description: 'Checks status of a variety of public IPFS gateways',
    url: 'https://ipfs.github.io/public-gateway-checker/',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.storage,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'How to Deploy an IPFS Node on Digital Ocean',
    description: 'Useful, straightforward tutorial on setting up your own IPFS Node',
    url: 'https://medium.com/pinata/how-to-deploy-an-ipfs-node-on-digital-ocean-c59b9e83098e',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.storage,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'A Crypto Thesis',
    description: 'A thesis on open financial systems',
    url: 'https://medium.com/@PanteraCapital/a-crypto-thesis-47eaacf861ca',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Ethereum Node Configuration Modes Cheat Sheet',
    description: 'Quick cheat sheet of the most common Geth and Parity configurations',
    url: 'https://dev.to/5chdn/ethereum-node-configuration-modes-cheat-sheet-25l8',
    category: categories.blockchain,
    subcategory: categories.blockchain.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
  // ===========================================================================
  //                       GUIDANCE, NAVIGATION, AND CONTROL
  // ===========================================================================
  {
    name: 'The Extended Kalman Filter: An Interactive Tutorial for Non-Experts',
    description: 'A fantastic introduction to Kalman Filters',
    url: 'https://home.wlu.edu/~levys/kalman_tutorial/',
    category: categories.gnc,
    subcategory: categories.gnc.subcategories.navigation,
    moreInfo: undefined,
    showIf: true,
  },
  // ===========================================================================
  //                                ALGORITHMS
  // ===========================================================================
  {
    name: 'How Not To Sort By Average Rating',
    description: 'A method for sorting user ratings',
    url: 'http://www.evanmiller.org/how-not-to-sort-by-average-rating.html',
    category: categories.automation,
    subcategory: categories.automation.subcategories.algorithms,
    moreInfo: undefined,
    showIf: true,
  },
  // ===========================================================================
  //                                WEB DESIGN
  // ===========================================================================
  {
    name: 'Adobe Color Wheel',
    description: 'Color pallette generator',
    url: 'https://color.adobe.com/create/color-wheel/',
    category: categories.webdev,
    subcategory: categories.webdev.subcategories.design,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Material Design Palette',
    description: 'Material design color pallette generator',
    url: 'https://www.materialpalette.com/',
    category: categories.webdev,
    subcategory: categories.webdev.subcategories.design,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Simple Icons',
    description: 'Free SVG icons for popular brands',
    url: 'https://simpleicons.org/',
    category: categories.webdev,
    subcategory: categories.webdev.subcategories.design,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Favicon Generator',
    description: 'Generate favicons for all browsers and platforms',
    url: 'https://realfavicongenerator.net',
    category: categories.webdev,
    subcategory: categories.webdev.subcategories.design,
    moreInfo: undefined,
    showIf: true,
  },
  // ===========================================================================
  //                             MISCELLANEOUS
  // ===========================================================================
  {
    name: 'Spaced Repetition',
    description: 'Efficient memorization using the spacing effect: literature review of widespread applicability, tips on use & what it’s good for',
    url: 'https://www.gwern.net/Spaced-repetition',
    category: categories.misc,
    subcategory: categories.misc.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'Augmenting Long-Term Memory',
    description: 'Investigation of personal memory systems',
    url: 'http://augmentingcognition.com/ltm.html',
    category: categories.misc,
    subcategory: categories.misc.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'How to Be Successful',
    description: 'Thirteen thoughts about how to achieve outlier success',
    url: 'http://blog.samaltman.com/how-to-be-successful',
    category: categories.misc,
    subcategory: categories.misc.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: '1,000 True Fans',
    description: 'To be a successful creator you don’t need millions of dollars, fans, or customers',
    url: 'https://kk.org/thetechnium/1000-true-fans/',
    category: categories.misc,
    subcategory: categories.misc.subcategories.general,
    moreInfo: undefined,
    showIf: true,
  },
];

// For each resource, add ID's based on the order they are in
resourceList.forEach((resource, index) => {
  resource.id = index;
});

// Export the list with the IDs added
export const resources = resourceList;
