module.exports = {
  siteMetadata: {
    title: `Hawk Blog`,
    name: `Hawk Blog`,
    siteUrl: `http://rawhawk.tech`,
    description: `Welcome To Hawk Blog`,
    hero: {
      heading: `Hello There, Nice To See You`,
      maxWidth: 962,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lol`,
      },
      {
        name: `github`,
        url: `https://github.com/lol`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/lol`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
