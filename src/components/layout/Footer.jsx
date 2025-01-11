// src/components/layout/Footer.jsx
import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Scale, Calculator, FileText, Gavel, Plane, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CopyButton = ({ textToCopy }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [tooltipText, setTooltipText] = useState('Másolás vágólapra');

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTooltipText('Sikeres másolás!');
      setShowSuccess(true);
      
      // Reset states after delay
      setTimeout(() => {
        setShowSuccess(false);
        setTimeout(() => {
          setTooltipText('Másolás vágólapra');
        }, 300);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [textToCopy]);

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="p-1.5 rounded-lg bg-primary-50 hover:bg-primary-100 transition-all duration-300 relative"
        aria-label="Email cím másolása"
      >
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-primary-600"
            >
              <Check size={14} />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-primary-600"
            >
              <Copy size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <AnimatePresence>
          {(showSuccess || true) && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
            >
              {tooltipText}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const services = [
    { name: 'Büntetőjog', href: '/services#criminal', icon: Scale },
    { name: 'Adójog', href: '/services#tax', icon: Calculator },
    { name: 'Transzferár', href: '/services#transfer', icon: FileText },
    { name: 'Polgári jog', href: '/services#civil', icon: Gavel },
    { name: 'Idegenrendészet', href: '/services#immigration', icon: Plane },
  ];

  const handleServiceClick = (e, href) => {
    if (location.pathname === '/services') {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.50/3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.50/3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative border-t border-gray-100">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <Link to="/" className="block text-xl font-display font-medium text-gray-900">
                <span className="text-primary-600">Dr.</span> Nagy Donát
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Személyre szabott jogi megoldások, szakértő képviselet és tanácsadás minden ügyfelünk számára.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                Szakterületek
              </h3>
              <ul className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.name}>
                      <Link 
                        to={service.href}
                        onClick={(e) => handleServiceClick(e, service.href)}
                        className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Icon size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                Kapcsolat
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+36702777677"
                    className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">+36 70 277 7677</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a 
                    href="mailto:donat.nagy@drnd.hu"
                    className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">donat.nagy@drnd.hu</span>
                  </a>
                  <CopyButton textToCopy="donat.nagy@drnd.hu" />
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    H-1086 Budapest,<br />
                    Lujza u. 1/B I/11
                  </span>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                Nyitvatartás
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <div>
                    <p className="font-medium">Hétfő - Péntek</p>
                    <p>9:00 - 17:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col gap-6">
              {/* Legal Text */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
                Ezt a honlapot dr. Nagy Donát Egyéni Ügyvéd (nyilvántartási szám: 36080698, nyilvántartó kamara: Budapesti Ügyvédi Kamara – 1055 Budapest, Szalay u. 7.) tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a{' '}
                <a href="http://www.magyarugyvedikamara.hu" className="text-primary-600 hover:text-primary-700 transition-colors">www.magyarugyvedikamara.hu</a> honlapon találhatóak.
              </p>
              
              {/* Copyright and Links */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                  © {currentYear} Dr. Nagy Donát Ügyvédi Iroda. Minden jog fenntartva.
                </p>
                <div className="flex items-center space-x-6">
                  <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                    Adatvédelem
                  </Link>
                  <Link to="/terms" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                    ÁSZF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;