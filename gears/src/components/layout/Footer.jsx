const Footer = () => {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading mb-4 text-accent">GamingGear</h3>
            <p className="text-light">Your one-stop shop for professional gaming equipment.</p>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition">Mice</a></li>
              <li><a href="#" className="hover:text-accent transition">Keyboards</a></li>
              <li><a href="#" className="hover:text-accent transition">Headsets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition">Shipping Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Newsletter</h4>
            <p className="mb-2">Subscribe for updates and offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-dark flex-grow rounded-l"
              />
              <button className="bg-accent px-4 py-2 rounded-r hover:bg-yellow-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-light">
          <p>&copy; {new Date().getFullYear()} GamingGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer