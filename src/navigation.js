import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
{
  text: 'About',
  href: getPermalink('/community/open-source-collective'),
},
{
  text: 'Resources',
  links: [
    { text: 'Blog', href: '/blog' },
    {
      text: 'Join the Slack',
      href: 'https://join.slack.com/t/joinoasis/shared_invite/zt-2ambp7cf6-y3XrgUYYHfE3RFBLOwKs4Q',
    },
    {
      text: 'Apply for membership',
      href: 'https://forms.fillout.com/t/mZ2kbN1bejus',
    },
  ],
},
  ],
  actions: [{ text: 'Apply for membership', href: 'https://forms.fillout.com/t/mZ2kbN1bejus', target: '_blank' }],
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
