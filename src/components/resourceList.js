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
  webdev: {
    text: 'Web Development',
    subcategories: {
      design: 'Design',
    },
  },
  blockchain: 'Blockchain',
  automation: 'Automation',
  finance: 'Finance',
};

// Define questions
const resourceList = [
  {
    name: 'Simple Icons',
    description: 'Free SVG icons for popular brands',
    url: 'https://simpleicons.org/',
    category: categories.webdev,
    subcategory: categories.webdev.subcategories.design,
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
