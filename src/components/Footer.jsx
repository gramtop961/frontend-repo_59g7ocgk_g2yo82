import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-gray-600">
        <p>
          Built with ❤️ using React and Tailwind CSS. <span className="text-gray-400">© {year}</span>
        </p>
      </div>
    </footer>
  );
}
