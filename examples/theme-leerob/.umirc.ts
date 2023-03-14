import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/styled-components',
    '@umijs/plugins/dist/react-query',
    'umi-plugin-docaid',
  ],
  styledComponents: {},
  reactQuery: {},
  favicons: [
    'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
  ],
  mfsu: false,
  hash: true,
  docaid: {
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
    theme: 'leerob',
    title: 'Docaid',
    headTitle: 'Docaid',
    siteUrl: 'https://your-site.com/',
    navs: [
      { title: 'home', path: '/' },
      { title: 'about', path: '/about' },
      { title: 'blog', path: '/posts' },
      { title: 'rss', href: '/rss.xml' },
    ],
    copyright: 'Docaid',
    utterances: {
      repo: 'leeguooooo/blogComment',
    },
    rss: {
      posts: {
        default: true,
        feedOpts: {
          image:
            'https://img.alicdn.com/imgextra/i1/O1CN01FwDVoc1YGhgE28l5B_!!6000000003032-2-tps-200-200.png',
          copyright: 'Docaid',
          author: {
            name: 'Your Name',
            email: 'your-email@gmail.com',
            link: 'https://your-site.com/',
          },
        },
      },
    },
  },
});
