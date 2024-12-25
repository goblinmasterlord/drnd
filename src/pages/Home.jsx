// src/pages/Home.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, ChevronDown, Scale, FileText, Calculator, Gavel, Plane, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroPattern } from '../components/sections/HeroPattern';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const services = [
  {
    id: "criminal",
    title: "Büntetőjog",
    description: "Szakértő védelem és képviselet büntetőjogi eljárásokban.",
    details: [
      "Büntetőjogi védelem",
      "Jogi képviselet büntetőeljárásban",
      "Fellebbezések és felülvizsgálati kérelmek",
      "Tanácsadás és konzultáció"
    ],
    icon: Scale
  },
  {
    id: "tax",
    title: "Adójog",
    description: "Átfogó adójogi tanácsadás és képviselet adóhatósági eljárásokban.",
    details: [
      "Adóhatósági eljárások",
      "Adótervezés és optimalizálás",
      "Adóellenőrzések kezelése",
      "Jogorvoslati eljárások"
    ],
    icon: Calculator
  },
  {
    id: "transfer",
    title: "Transzferár",
    description: "Szakértő transzferár-dokumentáció készítése és megfelelőségi tanácsadás.",
    details: [
      "Transzferár-dokumentáció készítése",
      "Megfelelőségi vizsgálatok",
      "Hatósági eljárások kezelése",
      "Nemzetközi tranzakciók"
    ],
    icon: FileText
  },
  {
    id: "civil",
    title: "Polgári jog",
    description: "Átfogó polgári jogi képviselet és tanácsadás magánszemélyek és vállalkozások részére.",
    details: [
      "Szerződések készítése és véleményezése",
      "Kártérítési ügyek",
      "Peres képviselet",
      "Követeléskezelés"
    ],
    icon: Gavel
  },
  {
    id: "immigration",
    title: "Bevándorlási Jog",
    description: "Szakértő támogatás letelepedési és bevándorlási ügyekben, vízumkérelmekben.",
    details: [
      "Tartózkodási engedélyek",
      "Letelepedési engedélyek",
      "Munkavállalási engedélyek",
      "Állampolgársági ügyek",
      "Vízumügyintézés",
      "Családegyesítés"
    ],
    icon: Plane
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center py-20 sm:py-32">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0">
          <HeroPattern />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="space-y-12 sm:space-y-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Main headline */}
                <div className="text-center space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-primary-600">
                    Dr. Nagy Donát Egyéni Ügyvéd
                  </h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900">
                    <span className="block mb-2">Teljeskörű</span>
                    <span className="text-primary-600">Jogi Képviselet</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                    Célom, hogy magas színvonalú jogi szolgáltatásokat nyújtsak az ügyfeleim számára, legyen szó magánszemélyekről vagy vállalkozásokról.
                  </p>

                  {/* CTAs */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <a 
                      href="tel:+36702777677"
                      className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30"
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Phone size={20} className="transition-transform duration-300 group-hover:scale-110 relative z-10" />
                      <span className="relative z-10 font-medium">+36 70 277 7677</span>
                    </a>
                    <a 
                      href="mailto:donat.nagy@drnd.hu"
                      className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-white text-primary-600 rounded-xl border border-primary-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
                    >
                      <Mail size={20} className="transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">donat.nagy@drnd.hu</span>
                    </a>
                  </motion.div>
                </div>

                {/* Services preview */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div 
                        key={service.title}
                        className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-colors"
                      >
                        <div className="absolute -inset-px rounded-2xl border border-gray-200 group-hover:border-primary-200 transition-colors" />
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent" />
                        
                        <div className="relative">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                          </div>
                          <h3 className="text-lg font-display font-medium text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-16 sm:pt-24 pb-24 sm:pb-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-gray-900 mb-4 sm:mb-6">
              Szakterületek
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Jogi szolgáltatások széles körű portfóliója, személyre szabott megoldásokkal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services#${service.id}`}
                  key={service.title}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-8 sm:p-10 h-full hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30 transition-all duration-300"
                  >
                    {/* Enhanced layered effects */}
                    <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500" />
                    <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-primary-200 transition-colors duration-300" />
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-6 h-6 text-primary-600 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-display font-medium text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                          {service.description}
                        </p>
                        <ul className="grid gap-3">
                          {service.details.map((detail, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                              <span className="text-base">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:via-primary-500 transition-all duration-300 rounded-b-2xl" />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <ConsultationCTA />
    </div>
  );
}