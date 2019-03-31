const items = [
  {
    name: 'NFL Survivor',
    description: 'blah blah',
    url: 'https://github.com/mds1/survivor-frontend',
    moreInfo: undefined,
    showIf: true,
  },
  {
    name: 'NFL Survivor',
    description: 'blah blah',
    url: 'https://github.com/mds1/survivor-frontend',
    moreInfo: undefined,
    showIf: true,
  },
];

// For each item, add ID's based on the order they are in
items.forEach((item, index) => {
  item.id = index;
});

// Export the list with the IDs added and give it a meaningful name
export const projects = items;
