import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const pages = ['home', 'register', 'login'];

  return (
    <div className="navbar bg-base-300 px-6 py-4">
      {/* App Title */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-gray-800">Blogging App</a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        {pages.map((page) => (
          <button
            key={page}
            className="btn btn-ghost text-lg capitalize"
            onClick={() => navigate(`/${page}`)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Settings Icon */}
      <div className="flex-none">
        <button className="btn btn-square btn-sm btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveAppBar;
