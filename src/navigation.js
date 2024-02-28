import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    { 
      text: 'Solutions',
      links: [
        {
          text: 'Process Automation',
          href: '/services/process-automation',
        },
        { text: 'MarTech Support', href: '/services/martech' },
        {
          text: 'First-party Analytics', href: '/services/first-party-analytics',
        }
      ],
    },
 {
  text: 'Resources',
  links: [
    {
      text: 'CDP ROI Calculator',
      href: '/calculators/cdp-roi',
    },
    {
      text: 'MarTech App Spotlights',
      href: '/videos/app-spotlights',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
},
{
  text: 'Pricing',
  href: '/pricing',
},
  ],
  actions: [{ text: 'Schedule a chat', href: '/consultation', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Our Principles', href: '/our-principles' },
        {
          text: 'Pricing',
          href: '/pricing',
        },
      ],
    },
    { 
      title: 'Solutions',
      links: [
        {
          text: 'Process Automation',
          href: '/services/process-automation',
        },
        { text: 'MarTech Support', href: '/services/martech' },
        {
          text: 'First-party Analytics', href: '/services/first-party-analytics',
        }
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          text: 'CDP ROI Calculator',
          href: '/calculators/cdp-roi',
        },
        {
          text: 'MarTech App Spotlights',
          href: '/videos/martech-app-spotlights',
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
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
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@ydkbyoasis' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made with ❤️ in <a class="text-primary hover:underline dark:text-gray-200" href="https://www.visitknoxville.com/"> Knoxville, TN</a> · All rights reserved. | We support a free and independent Palestine 🇵🇸
  `,
};
