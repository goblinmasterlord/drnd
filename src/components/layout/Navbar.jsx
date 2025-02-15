// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Főoldal', href: '/' },
    { name: 'Szakterületek', href: '/services' },
    { name: 'Rólam', href: '/about' },
    { name: 'Kapcsolat', href: '/contact' },
  ];

  const contactActions = [
    {
      icon: Phone,
      label: 'Telefonos Egyeztetés',
      value: '+36 70 277 7677',
      href: 'tel:+36702777677',
      color: 'primary'
    },
    {
      icon: Mail,
      label: 'Email Küldése',
      value: 'donat.nagy@drnd.hu',
      href: 'mailto:donat.nagy@drnd.hu',
      color: 'secondary'
    }
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <img src={Logo} alt="Logo" className="h-8 md:h-10 w-auto transition-transform hover:scale-105" />
              <span className="text-xl font-display font-medium text-gray-900 hover:text-primary-600 transition-colors">
                <span className="text-primary-600">Dr.</span> Nagy Donát Ügyvéd
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  )}
                >
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary-50 rounded-lg"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}

              {/* Contact Button */}
              <a
                href="tel:+36702777677"
                className="ml-6 inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+36 70 277 7677</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 -mr-2 text-gray-900 hover:text-primary-600 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-40 md:hidden"
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-20">
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <nav className="space-y-2">
                    {navigation.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={cn(
                            'flex items-center justify-between w-full p-4 text-lg font-medium rounded-xl transition-all',
                            location.pathname === item.href
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          )}
                        >
                          {item.name}
                          <ChevronRight 
                            size={20} 
                            className={cn(
                              "transition-transform",
                              location.pathname === item.href ? "text-primary-600" : "text-gray-400"
                            )}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Contact Actions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-6 bg-gray-50"
                >
                  <div className="space-y-3">
                    {contactActions.map((action) => (
                      <a
                        key={action.href}
                        href={action.href}
                        className={cn(
                          'flex items-center gap-4 p-4 rounded-xl transition-all group relative overflow-hidden',
                          action.color === 'primary' 
                            ? 'bg-primary-600 text-white hover:bg-primary-700'
                            : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-100'
                        )}
                      >
                        {/* Shine effect for primary button */}
                        {action.color === 'primary' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                        )}
                        <div 
                          className={cn(
                            'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                            action.color === 'primary' 
                              ? 'bg-primary-500'
                              : 'bg-primary-50'
                          )}
                        >
                          <action.icon 
                            className={cn(
                              'w-6 h-6',
                              action.color === 'primary'
                                ? 'text-white'
                                : 'text-primary-600'
                            )}
                          />
                        </div>
                        <div className="flex-1 relative">
                          <div 
                            className={cn(
                              'text-sm',
                              action.color === 'primary'
                                ? 'text-primary-100'
                                : 'text-gray-600'
                            )}
                          >
                            {action.label}
                          </div>
                          <div className="font-medium">{action.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;