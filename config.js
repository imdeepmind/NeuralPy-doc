const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://neuralpy.xyz',
    gaTrackingId: 'UA-124685583-3',
    trailingSlash: false,
  },
  header: {
    logo:
      'https://user-images.githubusercontent.com/34741145/81591141-99752900-93d9-11ea-9ef6-cc2c68daaa19.png',
    logoLink: 'https://neuralpy.xyz',
    title: "<a href='https://neuralpy.xyz'>NeuralPy</a>",
    githubUrl: 'https://github.com/imdeepmind/NeuralPy',
    helpUrl: '',
    tweetText: '',
    social: `
			<li>
		    <a href="https://discord.gg/ptGEQuy" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['get-started', 'installation', 'docs', 'support'],
    collapsedNav: [
      '/docs', // add trailing slash if enabled above
    ],
    links: [{ text: 'GitHub', link: 'https://github.com/imdeepmind/NeuralPy' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='https://neuralpy.xyz'>NeuralPy Deep Learning Library</a>",
  },
  siteMetadata: {
    title: 'NeuralPy Deep Learning Library',
    description: 'A Keras like Deep Learning library that works on top of PyTorch ',
    ogImage: null,
    docsLocation: 'https://github.com/imdeepmind/NeuralPy/docs',
    favicon:
      'https://user-images.githubusercontent.com/34741145/81591141-99752900-93d9-11ea-9ef6-cc2c68daaa19.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'NeuralPy Deep Learning Library',
      short_name: 'NeuralPy',
      start_url: '/',
      background_color: '#000',
      theme_color: '#ee4c2c',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/logo.png',
          sizes: `256x256`,
          type: `image/icon`,
        },
      ],
    },
  },
};

module.exports = config;
