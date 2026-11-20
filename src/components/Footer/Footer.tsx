import { useId, useState, type CSSProperties, type FormEvent } from 'react';
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

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default focus-visible:rounded-[2px]';
const linkClass = cx(
  'inline-flex items-center gap-xs text-label-03 text-default no-underline hover:underline',
  focusRing,
);

/**
 * Footer — SEO / White
 * Figma: WSA Component Library, node 4833:926 (Desktop, 1024, 768, Mobile, Mobile Open).
 * One responsive component; the mobile accordion replaces the "Mobile" / "Mobile Open" variants.
 * Breakpoints: <md Mobile accordion · md (768) two-up · lg (1024) four-up · xl (1280) Desktop five-up.
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
    <form className="flex flex-col items-start gap-xs py-xxs" onSubmit={submit}>
      <label className="text-label-03" htmlFor={`${uid}-email`}>
        Sign up for our newsletter
      </label>
      <input
        id={`${uid}-email`}
        className="h-8 w-full rounded-sm border border-subtle bg-action-neutral px-sm py-xxs font-brand text-label-03 text-default placeholder:text-default focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-default"
        type="email"
        placeholder="Email address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="h-8 cursor-pointer rounded-sm border-0 bg-button-disabled px-[14px] py-xs font-brand text-label-03 font-emphasis text-default enabled:hover:bg-button-hover disabled:cursor-not-allowed"
        type="submit"
        disabled={!email.trim()}
      >
        Sign up
      </button>
    </form>
  );

  return (
    <footer className="bg-grey-0 font-brand text-default">
      <div className="mx-auto flex max-w-[1408px] flex-col gap-md px-md py-[29px] xl:px-8">
        <a
          className={cx('block self-start leading-none', focusRing)}
          href="/"
          aria-label="Which School Advisor home"
        >
          <img className="h-[28px] w-[81px]" src={logo} alt="" width={81} height={28} />
        </a>

        <nav
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:border-b lg:border-subtle lg:pb-lg xl:grid-cols-5 xl:border-b-0 xl:pb-0"
          aria-label="Footer"
        >
          {sections.map((section, i) => {
            const isOpen = open.has(section.id);
            const panelId = `${uid}-${section.id}`;
            const isRightCol = i % 2 === 1;
            const isFirstRow = i < 2;
            return (
              <div
                key={section.id}
                className={cx(
                  // Mobile: accordion row with a rule underneath
                  'mb-[6px] border-b border-subtle pb-[6px]',
                  // md: two-up grid, vertical rule between columns, horizontal rule under row one
                  'md:m-0 md:flex-col md:gap-xs md:border-b-0 md:pb-0',
                  isRightCol ? 'md:border-l md:pl-md' : 'md:pr-md',
                  isFirstRow && 'md:mb-lg md:border-b md:pb-lg',
                  // lg+: single row, vertical rule before every column but the first
                  'lg:m-0 lg:border-b-0 lg:px-md lg:pb-0',
                  i === 0 ? 'lg:border-l-0 lg:pl-0' : 'lg:border-l',
                  // display is set in one place so breakpoints can't fight over it
                  section.desktopOnly ? 'hidden xl:flex' : 'block md:flex',
                )}
              >
                <h2 className="m-0 text-heading-compact-02">
                  <span className="hidden md:block">{section.title}</span>
                  <button
                    type="button"
                    className={cx(
                      'flex h-10 w-full cursor-pointer items-center border-0 bg-transparent px-xxs text-left font-brand text-heading-compact-02 text-default md:hidden',
                      focusRing,
                    )}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(section.id)}
                  >
                    {section.title}
                  </button>
                </h2>
                <ul
                  id={panelId}
                  className={cx('m-0 list-none flex-col p-0 md:flex md:gap-xs', isOpen ? 'flex' : 'hidden')}
                >
                  {section.links.map((link) => (
                    <li key={link.label} className="flex">
                      <a className={cx(linkClass, 'min-h-8 px-xxs md:min-h-[22px] md:px-0')} href={link.href}>
                        {link.icon && <img className="size-4 flex-none" src={link.icon} alt="" width={16} height={16} />}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {section.withNewsletter && <div className="hidden w-[224px] pt-md md:block">{newsletter}</div>}
              </div>
            );
          })}
        </nav>

        <div className="border-b border-subtle pb-[18px] md:hidden">{newsletter}</div>

        <div className="flex flex-wrap items-center justify-center gap-md py-xs md:gap-[36px] xl:border-t xl:border-subtle xl:pt-[20px]">
          {partnerLogos.map((p) => (
            <img
              key={p.name}
              className="block h-[calc(var(--h)*0.88)] w-[calc(var(--w)*0.88)] md:h-(--h) md:w-(--w)"
              src={p.src}
              alt={p.name}
              style={{ '--w': `${p.width}px`, '--h': `${p.height}px` } as CSSProperties}
            />
          ))}
        </div>

        <div className="flex flex-col items-center border-t border-subtle pt-[28px] md:flex-row md:flex-wrap md:gap-x-lg md:gap-y-md md:pt-[20px] xl:flex-nowrap">
          <button
            type="button"
            className={cx(
              'inline-flex min-h-9 cursor-pointer items-center gap-xs border-0 bg-transparent p-0 pb-md font-brand text-default md:pb-0',
              focusRing,
            )}
            onClick={onEditionClick}
            aria-haspopup="listbox"
          >
            <img className="block h-4 w-[22px]" src={flagAe} alt="" width={22} height={16} />
            <span className="text-label-03">{editionLabel}</span>
            <img src={arrowDropDown} alt="" width={20} height={20} />
          </button>
          <ul className="m-0 flex list-none flex-wrap justify-center gap-x-lg gap-y-md p-0 pb-md md:justify-start md:pb-0">
            {primaryLinks.map((l) => (
              <li key={l.label}>
                <a className={linkClass} href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className="m-0 flex list-none flex-wrap justify-center gap-x-lg gap-y-md p-0 pb-lg md:justify-start md:pb-0">
            {schoolLinks.map((l) => (
              <li key={l.label}>
                <a className={linkClass} href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className="m-0 flex list-none items-center gap-lg p-0 md:basis-full xl:ml-auto xl:basis-auto">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a className={cx('block size-6', focusRing)} href={s.href} aria-label={s.name}>
                  <img className="block size-6" src={s.src} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[14px] text-label-02 md:justify-between">
          <p className="m-0">{copyright}</p>
          <ul className="m-0 flex list-none gap-[14px] p-0 font-emphasis">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a className={cx('text-default no-underline hover:underline', focusRing)} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
