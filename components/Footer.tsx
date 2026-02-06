
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail, Globe, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img
                  src="https://i.ibb.co/nqrK3z82/Usenobong-Ekponyoh-4.png"
                  alt="Usenobong Ekponyoh"
                  className="h-[67px] w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Entrepreneur, Investor, and Strategic Innovator building resilient, future-ready enterprises across Technology, Energy, and Agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Detailed Biography</Link></li>
              <li><Link to="/ventures" className="text-slate-400 hover:text-white transition-colors">Business Portfolio</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Insights & Articles</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-blue" />
                <span>info@usenobong-ekponyoh.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-blue" />
                <span>+234 803 808 6605</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-brand-blue" />
                <span>Global Presence: Africa, Europe, Middle East</span>
              </li>
              <li>
                <Link to="/contact" className="inline-block mt-4 bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition-colors">
                  Contact Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Usenobong Ekponyoh. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span>Powered by Innovation & Strategic Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
