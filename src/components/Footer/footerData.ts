import homeIcon from './assets/home.svg';
import ruleIcon from './assets/rule.svg';
import contactSupportIcon from './assets/contact-support.svg';
import edinformaLogo from './assets/edinforma.svg';
import whichMediaLogo from './assets/which-media.svg';
import schoolsComparedLogo from './assets/schools-compared.svg';
import parentsUnitedLogo from './assets/parents-united.svg';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import facebookIcon from './assets/facebook.svg';
import xIcon from './assets/x.svg';

export type FooterLink = {
  label: string;
  href: string;
  icon?: string;
};

export type FooterSection = {
  id: string;
  title: string;
  links: FooterLink[];
  /** Show the newsletter signup inside this column (desktop/tablet). */
  withNewsletter?: boolean;
  /** Only shown at desktop width, per the Figma variants. */
  desktopOnly?: boolean;
};

export type FooterLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
};

export type SocialLink = {
  name: string;
  src: string;
  href: string;
};

// TODO: replace '#' hrefs with real routes once the site's URL map is known.
export const sections: FooterSection[] = [
  {
    id: 'school-reviews',
    title: 'School Reviews',
    links: [
      { label: 'Abu Dhabi Schools', href: '#' },
      { label: 'Ajman Schools', href: '#' },
      { label: 'Al Ain Schools', href: '#' },
      { label: 'Dubai Schools', href: '#' },
      { label: 'Fujairah Schools', href: '#' },
      { label: 'Ras al Khaimah Schools', href: '#' },
      { label: 'Sharjah Schools', href: '#' },
      { label: 'Umm al Quwain Schools', href: '#' },
    ],
  },
  {
    id: 'news',
    title: 'News',
    links: [
      { label: 'Secondary Schools', href: '#' },
      { label: 'Primary Schools', href: '#' },
      { label: 'School Fees', href: '#' },
      { label: 'School Performance', href: '#' },
      { label: 'Course & Curricula', href: '#' },
      { label: 'Finances & Funding', href: '#' },
      { label: 'University News', href: '#' },
      { label: 'SEN', href: '#' },
    ],
  },
  {
    id: 'guides',
    title: 'Guides',
    links: [
      { label: 'Choosing a School', href: '#' },
      { label: 'Exam Preparation', href: '#' },
      { label: 'Surveys', href: '#' },
      { label: 'University Preparation', href: '#' },
      { label: 'UAE Area Guides', href: '#' },
      { label: 'Best UAE Schools', href: '#' },
      { label: 'Curricula Guides', href: '#' },
    ],
  },
  {
    id: 'more',
    title: 'More',
    withNewsletter: true,
    links: [
      { label: 'UAE Home', href: '#', icon: homeIcon },
      { label: 'Take a Survey', href: '#', icon: ruleIcon },
      { label: 'School Enquiries', href: '#', icon: contactSupportIcon },
    ],
  },
  {
    id: 'editions',
    title: 'WSA Editions',
    desktopOnly: true,
    links: [
      { label: 'Singapore Schools', href: '#' },
      { label: 'Hong Kong Schools', href: '#' },
      { label: 'Thailand Schools', href: '#' },
      { label: 'UK Schools', href: '#' },
      { label: 'Vietnam Schools', href: '#' },
      { label: 'Saudi Arabia Schools', href: '#' },
    ],
  },
];

export const partnerLogos: FooterLogo[] = [
  { name: 'Edinforma', src: edinformaLogo, width: 91.667, height: 13.474 },
  { name: 'Which Media', src: whichMediaLogo, width: 67, height: 26 },
  { name: 'SchoolsCompared', src: schoolsComparedLogo, width: 73, height: 27 },
  { name: 'Parents United UAE', src: parentsUnitedLogo, width: 76, height: 36 },
];

export const primaryLinks: FooterLink[] = [
  { label: 'Advertise With Us', href: '#' },
  { label: 'Parent Consultancy', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const schoolLinks: FooterLink[] = [
  { label: 'School Sign-up', href: '#' },
  { label: 'School Login', href: '#' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', src: instagramIcon, href: '#' },
  { name: 'LinkedIn', src: linkedinIcon, href: '#' },
  { name: 'Facebook', src: facebookIcon, href: '#' },
  { name: 'X', src: xIcon, href: '#' },
];

export const legalLinks: FooterLink[] = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];
