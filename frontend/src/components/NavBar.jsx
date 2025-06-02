import { Link } from "react-router-dom";

function NavBar({ overlay = true }) {
  return (
    <nav
      className={`
       ${overlay ? "fixed top-0 w-full z-50" : "fixed"}
      bg-black/60 border-b border-zinc-800 backdrop-blur-sm
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="home-link flex items-center">
                <img
                  src="/Images/Cesare.png"
                  alt="ComicBoxd Logo Cesare"
                  className="h-11 w-auto mr-2"
                />
                <span className="text-2xl font-bold text-cbrand-1001">
                  ComicBoxd
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="home-link text-cbrand-300 hover:text-cbrand-1002 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-cbrand-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Discover
                </a>
                <a
                  href="#"
                  className="text-cbrand-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Series
                </a>
                <a
                  href="#"
                  className="text-cbrand-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Lists
                </a>
                <a
                  href="#"
                  className="text-cbrand-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search comics..."
                  className="bg-zinc-800 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cbrand-1001"
                />
              </div>
              <button className="ml-4 bg-zinc-800 hover:bg-cbrand-1002 px-4 py-1 rounded-full text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="ml-4 bg-cbrand-1000 hover:bg-cbrand-1002 px-4 py-1 rounded-full text-sm font-medium transition-colors">
                <Link to="/PopUp">Create Account</Link>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-cbrand-400 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar for Mobile */}
      <div className="md:hidden hidden" id="#mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="home-link text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-cbrand-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Discover
          </a>
          <a
            href="#"
            className="text-cbrand-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Series
          </a>
          <a
            href="#"
            className="text-cbrand-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Lists
          </a>
          <a
            href="#"
            className="text-cbrand-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            News
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
