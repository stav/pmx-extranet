import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'IT Consulting',
          href: getPermalink('/services/it-consulting'),
        },
        {
          text: 'Digital Solutions',
          href: getPermalink('/services/digital-solutions'),
        },
        {
          text: 'Cloud Services',
          href: getPermalink('/services/cloud-services'),
        },
        {
          text: 'Managed IT',
          href: getPermalink('/services/managed-it'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('/case-studies'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Category Page',
          href: getPermalink('technology', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('it-services', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'IT Consulting', href: getPermalink('/services/it-consulting') },
        { text: 'Digital Solutions', href: getPermalink('/services/digital-solutions') },
        { text: 'Cloud Services', href: getPermalink('/services/cloud-services') },
        { text: 'Managed IT', href: getPermalink('/services/managed-it') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Help Center', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Cookie Policy', href: getPermalink('/cookie-policy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} PMX Services. All rights reserved.
  `,
};
