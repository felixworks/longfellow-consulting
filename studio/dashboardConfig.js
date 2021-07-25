export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60fcdfb2e0e9a409f882f19c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nkpjq7c5',
                  apiId: 'baaa9711-71ff-46fa-8da8-7ce8ad513ce8'
                },
                {
                  buildHookId: '60fcdfb27bde70d821eee4bb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r63g4qdg',
                  apiId: 'd8c8e5ce-e395-4d08-b582-5fa12b3b55e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felixworks/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r63g4qdg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
