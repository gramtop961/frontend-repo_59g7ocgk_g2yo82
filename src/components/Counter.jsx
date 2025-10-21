import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900">Interactive Counter</h3>
      <p className="mt-1 text-sm text-gray-600">A tiny interactive example.</p>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 active:scale-[0.98]"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          aria-label="Decrease count"
        >
          −
        </button>
        <span className="min-w-[3rem] text-center text-xl font-semibold tabular-nums text-gray-900">
          {count}
        </span>
        <button
          type="button"
          className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 active:scale-[0.98]"
          onClick={() => setCount((c) => c + 1)}
          aria-label="Increase count"
        >
          +
        </button>
      </div>
    </section>
  );
}
