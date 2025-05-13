import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Education',
          href: getPermalink('/services/education'),
        },
        {
          text: 'Consulting',
          href: getPermalink('/services/consulting'),
        },
        {
          text: 'Implementation',
          href: getPermalink('/services/implementation'),
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
          text: 'Pricing',
          href: getPermalink('/pricing'),
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
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Education', href: getPermalink('/services/education') },
        { text: 'Consulting', href: getPermalink('/services/consulting') },
        { text: 'Implementation', href: getPermalink('/services/implementation') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
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
