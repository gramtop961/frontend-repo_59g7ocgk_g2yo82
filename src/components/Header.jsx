import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Hello World
        </h1>
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
          Simple Demo
        </span>
      </div>
    </header>
  );
}
