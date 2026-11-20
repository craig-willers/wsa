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
import homeIconBlue from './assets/blue/home.svg';
import ruleIconBlue from './assets/blue/rule.svg';
import contactSupportIconBlue from './assets/blue/contact-support.svg';
import edinformaLogoBlue from './assets/blue/edinforma.svg';
import whichMediaLogoBlue from './assets/blue/which-media.svg';
import schoolsComparedLogoBlue from './assets/blue/schools-compared.svg';
import parentsUnitedLogoBlue from './assets/blue/parents-united.svg';
import instagramIconBlue from './assets/blue/instagram.svg';
import linkedinIconBlue from './assets/blue/linkedin.svg';
import facebookIconBlue from './assets/blue/facebook.svg';
import xIconBlue from './assets/blue/x.svg';

export type FooterTheme = 'white' | 'blue';

/** An image source, either shared by every theme or given per theme (e.g. white artwork on blue). */
export type ThemedSrc = string | Record<FooterTheme, string>;

export const resolveSrc = (src: ThemedSrc, theme: FooterTheme) => (typeof src === 'string' ? src : src[theme]);

export type FooterLink = {
  label: string;
  href: string;
  icon?: ThemedSrc;
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
  src: ThemedSrc;
  width: number;
  height: number;
  href?: string;
};

export type SocialLink = {
  name: string;
  src: ThemedSrc;
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
      { label: 'UAE Home', href: '#', icon: { white: homeIcon, blue: homeIconBlue } },
      { label: 'Take a Survey', href: '#', icon: { white: ruleIcon, blue: ruleIconBlue } },
      { label: 'School Enquiries', href: '#', icon: { white: contactSupportIcon, blue: contactSupportIconBlue } },
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
  { name: 'Edinforma', src: { white: edinformaLogo, blue: edinformaLogoBlue }, width: 91.667, height: 13.474 },
  { name: 'Which Media', src: { white: whichMediaLogo, blue: whichMediaLogoBlue }, width: 67, height: 26 },
  { name: 'SchoolsCompared', src: { white: schoolsComparedLogo, blue: schoolsComparedLogoBlue }, width: 73, height: 27 },
  { name: 'Parents United UAE', src: { white: parentsUnitedLogo, blue: parentsUnitedLogoBlue }, width: 76, height: 36 },
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
  { name: 'Instagram', src: { white: instagramIcon, blue: instagramIconBlue }, href: '#' },
  { name: 'LinkedIn', src: { white: linkedinIcon, blue: linkedinIconBlue }, href: '#' },
  { name: 'Facebook', src: { white: facebookIcon, blue: facebookIconBlue }, href: '#' },
  { name: 'X', src: { white: xIcon, blue: xIconBlue }, href: '#' },
];

export const legalLinks: FooterLink[] = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];
