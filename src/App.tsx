import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <main style={{ minHeight: '40vh', padding: 24 }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>WSA component preview</h1>
      </main>
      <Footer
        onNewsletterSubmit={(email) => console.log('newsletter signup', email)}
      />
    </>
  );
}

export default App;
