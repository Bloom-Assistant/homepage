import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
{
  text: 'Services',
  links: [
    {
      text: 'Mighty Networks Chat',
      href: getPermalink('/community/mighty-networks'),
    },
    {
      text: 'Direct Action Network',
      href: getPermalink('/community/direct-action'),
    },
    {
      text: 'Independent Journalism',
      href: getPermalink('/community/independent-journalism'),
    },
  ],
},
{
  text: 'Resources',
  links: [
    { text: 'Blog', href: '/blog' },
    {
      text: 'Aid Services Directory (Coming Soon!)',
      href: getPermalink('#'),
    },
    {
      text: 'Direct Action Team (Coming Soon!)',
      href: getPermalink('#'),
    },
    {
      text: 'Sponsor our work',
      href: getPermalink('/get-involved/sponsor'),
    },
  ],
},
{
  text: 'About',
  links: [
    { text: 'Founder Story (Coming Soon)', href: '#' },
    { text: 'Why a paid community? (Coming Soon)', href: '#' },
  ],
},
  ],
  actions: [{ text: 'Create a free account', href: 'https://joinoasis.mn.co/share/uy9GF2G6bUT1mPd8?utm_source=manual', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Affiliates', href: '' },
        { text: 'Job Board', href: '' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/getoasis' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@oasis' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made with ❤️ in <a class="text-primary hover:underline dark:text-gray-200" href="https://www.visitknoxville.com/"> Knoxville, TN</a> · All rights reserved. | We support a free and independent Palestine 🇵🇸
  `,
};
