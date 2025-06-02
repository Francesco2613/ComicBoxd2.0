import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-cbrand-900 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-medium mb-4">ComicBoxd</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Pro Account
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Gift Pro
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  API
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-4">Comics</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  By Publisher
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  By Genre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-4">Community</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Lists
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Members
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Challenges
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-4">Support</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Help
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 ComicBoxd. All rights reserved.
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-discord"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-reddit"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
