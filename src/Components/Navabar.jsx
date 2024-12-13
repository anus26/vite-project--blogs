import React from 'react'
import { useNavigate } from 'react-router-dom';
const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const pages = ['home', 'login', 'register', 'dashboard', 'blogs'];
  
    return (
      <div className="navbar bg-base-100">
        <div className="flex-none">
          {pages.map((page) => (
            <button
              key={page}
              className="btn btn-square btn-ghost"
              onClick={() => navigate(`/${page}`)}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div>
    );
  };
  
  export default ResponsiveAppBar;
  