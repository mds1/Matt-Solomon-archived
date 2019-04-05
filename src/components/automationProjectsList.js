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
    name: 'Fiplo',
    description: `Your personalized online financial advisor. <i>This project
    is under heavy development, and therefore is not live and the code is
    not open-sourced yet.</i>`,
    tools: [
      { name: 'Vue', url: 'https://vuejs.org/' },
      { name: 'Quasar Framework', url: 'https://quasar-framework.org' },
      { name: 'Zillow API', url: 'https://www.zillow.com' },
      { name: 'Firebase', url: 'https://firebase.google.com' },
      { name: 'Amazon Web Services', url: 'https://aws.amazon.com' },
    ],
    urlGit: '',
    urlHome: '',
    imgPath: 'statics/projects/automation/fiplo.png',
    showIf: true,
  },
  {
    name: 'Hierarchical D* Lite',
    description: `Automated real-time path-planning algorithm to find near-optimal
    paths in unknown environments.`,
    tools: [
      { name: 'Python', url: 'https://www.python.org' },
      { name: 'LaTeX', url: 'https://www.latex-project.org' },

    ],
    urlGit: 'https://github.com/mds1/path-planning',
    urlHome: 'https://github.com/mds1/path-planning',
    imgPath: 'statics/projects/automation/path-planning.png',
    showIf: true,
  },
  {
    name: 'Additional Projects',
    description: `Additional projects not shown in detail here include:
    <ul>
      <li>Web scraper to automatically retrieve NBA odds from
        <a href='https://projects.fivethirtyeight.com/2019-nba-predictions/games/?ex_cid=rrpromo'
        target='_blank'>FiveThirtyEight</a> each day
      </li>
      <li>
        Web scraper to automatically retrieve all jobs from the Bureau of
        Labor Statistics' <a href='https://www.bls.gov/soc/2018/major_groups.htm'
        target='blank'>2018 Standard Occupational Classification System</a>
      </li>
      <li>
        Tools to automatically fill web forms
      </li>
    </ul>.`,
    tools: [
      { name: 'Python', url: 'https://www.python.org' },
      { name: 'Scrapy', url: 'https://scrapy.org' },
      { name: 'Selenium', url: 'https://www.seleniumhq.org' },

    ],
    urlGit: 'https://github.com/mds1/path-planning',
    urlHome: 'https://github.com/mds1/path-planning',
    imgPath: 'statics/projects/automation/path-planning.png',
    showIf: true,
  },
];

// For each item, add ID's based on the order they are in
items.forEach((item, index) => {
  item.id = index;
});

// Export the list with the IDs added and give it a meaningful name
export const projects = items;
