import { useId, useState, type CSSProperties, type FormEvent } from 'react';
import styles from './Footer.module.css';
import logo from './assets/logo.svg';
import flagAe from './assets/flag-ae.svg';
import arrowDropDown from './assets/arrow-drop-down.svg';
import {
  sections as defaultSections,
  partnerLogos,
  primaryLinks,
  schoolLinks,
  socialLinks,
  legalLinks,
  type FooterSection,
} from './footerData';

export type FooterProps = {
  sections?: FooterSection[];
  /** Section ids expanded by default in the mobile accordion. */
  defaultOpenSections?: string[];
  editionLabel?: string;
  onEditionClick?: () => void;
  onNewsletterSubmit?: (email: string) => void;
  copyright?: string;
};

/**
 * Footer — SEO / White
 * Figma: WSA Component Library, node 4833:926 (Desktop, 1024, 768, Mobile, Mobile Open).
 * One responsive component; the mobile accordion replaces the "Mobile" / "Mobile Open" variants.
 */
export function Footer({
  sections = defaultSections,
  defaultOpenSections = [],
  editionLabel = 'UAE Edition',
  onEditionClick,
  onNewsletterSubmit,
  copyright = `© 2012-${new Date().getFullYear()} Which Media FZ LLC`,
}: FooterProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpenSections));
  const [email, setEmail] = useState('');
  const uid = useId();

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) onNewsletterSubmit?.(email.trim());
  };

  const newsletter = (
    <form className={styles.newsletter} onSubmit={submit}>
      <label className={styles.label03} htmlFor={`${uid}-email`}>
        Sign up for our newsletter
      </label>
      <input
        id={`${uid}-email`}
        className={styles.input}
        type="email"
        placeholder="Email address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.button} type="submit" disabled={!email.trim()}>
        Sign up
      </button>
    </form>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.logo} href="/" aria-label="Which School Advisor home">
          <img src={logo} alt="" width={81} height={28} />
        </a>

        <nav className={styles.columns} aria-label="Footer">
          {sections.map((section) => {
            const isOpen = open.has(section.id);
            const panelId = `${uid}-${section.id}`;
            return (
              <div
                key={section.id}
                className={[
                  styles.column,
                  section.desktopOnly ? styles.desktopOnly : '',
                  isOpen ? styles.open : '',
                ].join(' ')}
              >
                <h2 className={styles.heading}>
                  <span className={styles.headingText}>{section.title}</span>
                  <button
                    type="button"
                    className={styles.accordionToggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(section.id)}
                  >
                    {section.title}
                  </button>
                </h2>
                <ul id={panelId} className={styles.links}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a className={styles.link} href={link.href}>
                        {link.icon && <img className={styles.linkIcon} src={link.icon} alt="" width={16} height={16} />}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {section.withNewsletter && <div className={styles.columnNewsletter}>{newsletter}</div>}
              </div>
            );
          })}
        </nav>

        <div className={styles.mobileNewsletter}>{newsletter}</div>

        <div className={styles.partners}>
          {partnerLogos.map((p) => (
            <img
              key={p.name}
              className={styles.partnerLogo}
              src={p.src}
              alt={p.name}
              style={{ '--w': `${p.width}px`, '--h': `${p.height}px` } as CSSProperties}
            />
          ))}
        </div>

        <div className={styles.utility}>
          <button
            type="button"
            className={styles.edition}
            onClick={onEditionClick}
            aria-haspopup="listbox"
          >
            <img className={styles.flag} src={flagAe} alt="" width={22} height={16} />
            <span className={styles.label03}>{editionLabel}</span>
            <img src={arrowDropDown} alt="" width={20} height={20} />
          </button>
          <ul className={styles.inlineLinks}>
            {primaryLinks.map((l) => (
              <li key={l.label}>
                <a className={styles.link} href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className={styles.inlineLinks}>
            {schoolLinks.map((l) => (
              <li key={l.label}>
                <a className={styles.link} href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className={styles.socials}>
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name}>
                  <img src={s.src} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.legal}>
          <p className={styles.copyright}>{copyright}</p>
          <ul className={styles.legalLinks}>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
