import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'First Party Analytics Consulting',
          href: '/services/first-party-analytics-consulting',
        },
        {
          text: 'Data Pipeline Audits',
          href: '/services/data-pipeline-audits',
        },
        {
          text: 'Technical Consulting',
          href: '/services/technical-consulting',
        },
      ],
    },
/* {
  text: 'Who we are',
  links: [
    {
      text: 'Our Principles',
      href: '/our-principles',
    },
    {
      text: 'Our Model',
      href: '/our-model',
    },
    { 
      text: 'Open Source', 
      href: '/open-source'
    },
  ],
}, */
{
  text: 'Blog',
  href: getBlogPermalink(),
},
{
  text: 'Client Portal',
  href: 'https://portal.getoasis.io/login?step=signIn',
},
  ],
  actions: [{ text: 'Schedule a chat', href: '/schedule-a-demo', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Our Principles', href: '/our-principles' },
        { text: 'Our Model', href: '/our-model' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'First-party Analytics Consulting', href: '/services/first-party-analytics-consulting' },
        { text: 'Data Pipeline Audits', href: '/services/data-pipeline-audits' },
        { text: 'Technical Consulting', href: '/services/technical-consulting' },
      ],
    },
    {
      title: 'Client Portal',
      links: [{ text: 'Login', href: 'https://portal.getoasis.io/login?step=signIn' }],
    }
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
