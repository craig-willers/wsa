import { useState } from 'react';
import { Footer, type FooterTheme } from './components/Footer';

const footerThemes: { value: FooterTheme; label: string }[] = [
  { value: 'white', label: 'White' },
  { value: 'blue', label: 'Blue' },
];

const initialTheme = (): FooterTheme =>
  new URLSearchParams(window.location.search).get('theme') === 'blue' ? 'blue' : 'white';

function App() {
  const [theme, setTheme] = useState<FooterTheme>(initialTheme);

  const choose = (value: FooterTheme) => {
    setTheme(value);
    const url = new URL(window.location.href);
    url.searchParams.set('theme', value);
    window.history.replaceState(null, '', url);
  };

  return (
    <>
      <main style={{ minHeight: '40vh', padding: 24 }}>
        <div
          className="mb-lg inline-flex gap-xxs rounded-round border border-subtle bg-grey-0 p-xxs"
          role="radiogroup"
          aria-label="Footer colour"
        >
          {footerThemes.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={theme === value}
              onClick={() => choose(value)}
              className={
                'h-8 cursor-pointer rounded-round border-0 px-md font-brand text-label-03 font-emphasis focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default ' +
                (theme === value ? 'bg-grey-800 text-inverse' : 'bg-transparent text-default hover:bg-button-hover')
              }
            >
              {label}
            </button>
          ))}
        </div>
        <h1 style={{ margin: 0, fontSize: 20 }}>WSA component preview</h1>
      </main>
      <Footer theme={theme} onNewsletterSubmit={(email) => console.log('newsletter signup', email)} />
    </>
  );
}

export default App;
