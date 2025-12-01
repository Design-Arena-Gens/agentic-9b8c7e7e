import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>ASP.NET Style Site on Vercel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A clean, ASP.NET-inspired website implemented with Next.js for Vercel." />
      </Head>
      <main className="container">
        <header className="header">
          <h1>Contoso Web</h1>
          <nav>
            <Link href="#features">Features</Link>
            <Link href="#get-started">Get Started</Link>
            <a href="/api/hello">API</a>
          </nav>
        </header>

        <section className="hero">
          <h2>Modern, ASP.NET-inspired web on Vercel</h2>
          <p>
            Built with Next.js and React, designed to echo the familiar structure and aesthetics
            of classic ASP.NET MVC sites.
          </p>
          <div className="actions">
            <a className="button primary" href="#get-started">Explore</a>
            <a className="button" href="/api/hello">API Endpoint</a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="card">
            <h3>Razor-like Pages</h3>
            <p>Pages-based routing feels familiar, with clean file-based conventions.</p>
          </div>
          <div className="card">
            <h3>Controllers ? API Routes</h3>
            <p>Simple serverless API routes replace traditional controllers.</p>
          </div>
          <div className="card">
            <h3>Static + Dynamic</h3>
            <p>Pre-render pages and augment with dynamic serverless logic when needed.</p>
          </div>
        </section>

        <section id="get-started" className="content">
          <h2>Get Started</h2>
          <ol>
            <li>Visit the <a href="/api/hello">/api/hello</a> endpoint.</li>
            <li>Customize UI in <code>pages/index.tsx</code> and styles in <code>styles/globals.css</code>.</li>
            <li>Deploy instantly to Vercel for global scale.</li>
          </ol>
        </section>

        <footer className="footer">? {new Date().getFullYear()} Contoso Web</footer>
      </main>
    </>
  );
}
