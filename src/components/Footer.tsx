import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1723750290151-164cb19ebab7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1760716478125-aa948e99ef85?w=400&h=400&fit=crop'
  ];

  return (
    <footer>
      {/* Gallery Strip */}
      <div className="grid grid-cols-3 md:grid-cols-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Main Footer */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & Social */}
            <div>
              <h3 className="text-2xl mb-6 tracking-tight">MODURA.</h3>
              <p className="text-gray-400 mb-6">
                Design-driven furniture for modern living. Transform your space with timeless pieces.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Shop All</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Collections</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 tracking-wider">CONTACT</h4>
              <ul className="space-y-3 text-gray-400">
                <li>123 Design Street</li>
                <li>New York, NY 10001</li>
                <li className="pt-2">
                  <a href="mailto:hello@modura.com" className="hover:text-white transition-colors">
                    hello@modura.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 MODURA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
