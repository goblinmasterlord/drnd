// src/pages/Home.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, ChevronDown, Scale, FileText, Calculator, Gavel } from 'lucide-react';
import { HeroPattern } from '../components/sections/HeroPattern';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const services = [
  {
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
    title: "Polgári jog",
    description: "Átfogó polgári jogi képviselet és tanácsadás magánszemélyek és vállalkozások részére.",
    details: [
      "Szerződések készítése és véleményezése",
      "Kártérítési ügyek",
      "Peres képviselet",
      "Követeléskezelés"
    ],
    icon: Gavel
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
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Main headline */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-primary-600">
                    Dr. Nagy Donát
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-gray-900">
                    <span className="block mb-2">Szakértő</span>
                    <span className="text-primary-600">Jogi Képviselet</span>
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4">
                  Személyre szabott jogi megoldások, több mint 15 év szakmai tapasztalattal
                </p>

                {/* CTAs */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4"
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

                {/* Services preview */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-24 px-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div 
                        key={service.title}
                        className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/80 transition-colors"
                      >
                        <div className="absolute -inset-px rounded-2xl border border-gray-200 group-hover:border-primary-200 transition-colors" />
                        <div className="relative">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-display font-medium text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Jogi szolgáltatások széles körű portfóliója, személyre szabott megoldásokkal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8"
                >
                  {/* Multiple layered shadows for depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/20 transition-opacity opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow" />
                  <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-gray-200 transition-colors" />
                  
                  <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-medium text-gray-900 mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      <ul className="grid gap-2 sm:gap-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
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