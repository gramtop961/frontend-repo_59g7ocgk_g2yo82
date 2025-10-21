import React from 'react';
import Header from './components/Header.jsx';
import GreetingCard from './components/GreetingCard.jsx';
import Counter from './components/Counter.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8">
          <GreetingCard />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Counter />
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Hello, World!</h3>
            <p className="mt-2 text-gray-600">
              This is a clean starter showcasing a few small, focused components. Use it as a
              base to build anything you like.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>A header for identity</li>
              <li>A greeting card for context</li>
              <li>An interactive counter for interactivity</li>
              <li>A footer for credits</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
