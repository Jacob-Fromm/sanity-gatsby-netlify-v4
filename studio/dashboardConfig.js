export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6032e632258d66d05e220e37',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-netlify-v-4-studio',
                  apiId: 'b5c768be-b1ea-4ca8-92fa-06d5589dd878'
                },
                {
                  buildHookId: '6032e632d1886af3a38e5edd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-netlify-v-4',
                  apiId: 'da644d2b-8b22-44eb-951f-34930044dc8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/sanity-gatsby-netlify-v4',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-netlify-v-4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
