export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <img src="/logo.png" className="w-[6rem] bg-white p-3 rounded-md" alt="" />
          <p className="text-gray-400 mt-4">
            Your trusted platform to find the perfect rental property with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/properties" className="text-gray-300 hover:text-white">Properties</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            <li><a href="/faq" className="text-gray-300 hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:info@rentspace.com" className="hover:text-white">info@rentspace.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
            <li>Address: 123 Main Road, Rajshahi, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} RentSpace. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
