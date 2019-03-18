// Define available categories
export const resourceCategories = {
  blockchain: 'Blockchain',
  finance: 'Finance',
  webDesign: 'Web Design',
  misc: 'Miscellaneous',
};

// Define resources
const resourceList = [
  {
    textToShow: 'e.g. article name',
    url: 'https://...',
    category: resourceCategories.blockchain,
    showIf: true, // in case a link needs to be hidden for whatever reason
  },
];

// For each question, add ID's based on the order they are in
resourceList.forEach((resource, index) => {
  resource.id = index;
});

// Export the list with the IDs added
export const resources = resourceList;
