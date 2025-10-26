import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-heading mb-4 text-yellow-400">GamingGear</h3>
            <p className="text-gray-300 mb-4">
              Your ultimate destination for professional gaming equipment used by esports champions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">YouTube</span>
                ▶️
              </a>
            </div>
          </div>
          
          {/* Categories Section */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-yellow-400">Shop Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Mice" className="text-gray-300 hover:text-white transition block">
                  Gaming Mice
                </Link>
              </li>
              <li>
                <Link to="/products?category=Keyboards" className="text-gray-300 hover:text-white transition block">
                  Mechanical Keyboards
                </Link>
              </li>
              <li>
                <Link to="/products?category=Headsets" className="text-gray-300 hover:text-white transition block">
                  Gaming Headsets
                </Link>
              </li>
              <li>
                <Link to="/products?category=Mousepads" className="text-gray-300 hover:text-white transition block">
                  Mouse Pads
                </Link>
              </li>
              <li>
                <Link to="/products?category=Monitors" className="text-gray-300 hover:text-white transition block">
                  Gaming Monitors
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-gray-300 hover:text-white transition block">
                  Gaming Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information Section */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-yellow-400">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition block">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition block">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service Section */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-yellow-400">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-white transition block">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition block">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-300 hover:text-white transition block">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/pro-reviews" className="text-gray-300 hover:text-white transition block">
                  Pro Player Reviews
                </Link>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-heading mb-2 text-yellow-400">Newsletter</h5>
              <p className="text-gray-300 text-sm mb-2">Get updates on new gear and exclusive deals</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-gray-900 flex-grow rounded-l text-sm"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r text-sm font-medium transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} GamingGear. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/sitemap" className="text-gray-400 hover:text-white transition">
              Sitemap
            </Link>
            <Link to="/affiliate" className="text-gray-400 hover:text-white transition">
              Affiliate Program
            </Link>
            <Link to="/careers" className="text-gray-400 hover:text-white transition">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;