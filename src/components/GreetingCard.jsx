import React from 'react';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function GreetingCard() {
  const greeting = getGreeting();
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-indigo-200 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-200 blur-3xl" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{greeting} 👋</h2>
      <p className="mt-2 max-w-prose text-gray-600">
        Welcome to your first React + Tailwind app. This is a minimal, friendly starting
        point. Edit and extend as you like!
      </p>
    </section>
  );
}
