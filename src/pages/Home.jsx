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
    description: "Védelem és képviselet büntetőeljárásban, különösen költségvetési csalásban.",
    details: [
      "Szakértő védelem olyan ügyekben amik költségvetési csalással kapcsolatosak",
      "Fellebbezések és felülvizsgálati kérelmek"
    ],
    icon: Scale,
    gradientColors: "from-blue-500/10 via-indigo-500/10 to-blue-500/10"
  },
  {
    id: "tax",
    title: "Adójog",
    description: "Átfogó adójogi tanácsadás és képviselet adóhatósági eljárásokban.",
    details: [
      "Adóellenőrzések kezelése",
      "Tanácsadás adótervezésben és optimalizálásban"
    ],
    icon: Calculator,
    gradientColors: "from-emerald-500/10 via-teal-500/10 to-emerald-500/10"
  },
  {
    id: "transfer",
    title: "Transzferár",
    description: "Transzferár-dokumentáció készítése és megfelelőségi tanácsadás.",
    details: [
      "Fődokumentum (Master file) és Helyi dokumentum (Local file) készítése",
      "Transzferár adatszolgáltatás készítése",
      "Meglévő dokumentumok felülvizsgálata",
      "Külföldi dokumentumok ellenőrzése magyar szabályok tekintetében",
      "Hatósági eljárások kezelése",
      "Tanácsadás árképzésben és tanácsadás"
    ],
    icon: FileText,
    gradientColors: "from-violet-500/10 via-purple-500/10 to-violet-500/10"
  },
  {
    id: "civil",
    title: "Polgári jog",
    description: "Átfogó polgári jogi képviselet és tanácsadás magánszemélyek és vállalkozások részére.",
    details: [
      "Szerződések készítése és véleményezése",
      "Peres képviselet",
      "Követeléskezelés"
    ],
    icon: Gavel,
    gradientColors: "from-amber-500/10 via-orange-500/10 to-amber-500/10"
  },
  {
    id: "immigration",
    title: "Idegenrendészeti ügyek",
    description: "Szakértő támogatás letelepedési és bevándorlási ügyekben, vízumkérelmekben.",
    details: [
      "Tartózkodási engedélyek",
      "Letelepedési engedélyek"
    ],
    icon: Plane,
    gradientColors: "from-sky-500/10 via-cyan-500/10 to-sky-500/10"
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
            className="text-center mb-16 sm:mb-20"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services#${service.id}`}
                  key={service.title}
                  className="group relative flex rounded-2xl bg-white transition-all duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col p-6 sm:p-8 w-full"
                  >
                    {/* Card effects */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 shadow-md shadow-gray-200/50 transition-shadow duration-300 rounded-2xl group-hover:shadow-lg" />
                      <div className="absolute inset-0 border border-gray-100 rounded-2xl transition-colors duration-300 group-hover:border-primary-100" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-transparent opacity-0 transition-opacity duration-300 rounded-2xl group-hover:opacity-100" />
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-100">
                        <Icon className="w-7 h-7 text-primary-600 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-medium text-gray-900 mb-3 transition-colors duration-300 group-hover:text-primary-600">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* Service highlights */}
                      <div className="mt-auto space-y-2.5">
                        {service.details.slice(0, 3).map((detail, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-3 text-sm text-gray-600"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Call-to-action */}
                      <div className="mt-8 flex items-center text-primary-600 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span>További részletek</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
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