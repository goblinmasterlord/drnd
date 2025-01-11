// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.50/3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.50/3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">
              <span className="relative">Bemutatkozás</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-gray-900 tracking-tight">
              Dr. Nagy Donát
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Ügyvéd, jogi tanácsadó, az Ön partnere a jogi megoldásokban
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Container */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Profilkép helye</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-50/50 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-900">
                    Szakértelem és Elkötelezettség
                  </h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p className="leading-relaxed">
                      Dr. Nagy Donát vagyok, Jogi diplomámat a Eötvös Lóránd Tudományegyetem Állam- és Jogtudományi Karán szereztem meg 2019-ben. Diplomám megszerzése után sokrétű szakmai tapasztalatra tettem szert ügyvédi irodáknál, majd a Nemzeti Adó- és Vámhivatalnál szolgáltam.  Az Adóhatóságnál ismerkedtem meg a Transzferár világával, majd később egy neves hazai adótanácsadó cégnél dolgoztam transzferár tanácsadóként.
                    </p>
                    <p className="leading-relaxed">
                      Hiszem, hogy minden problémára van megoldás, még ha először úgy is tűnik, hogy elvesztünk a jog világában. Úgy vélem, hogy szakmai tapasztalataim lehetővé teszik, hogy hollisztikusan vizsgáljam meg a felmerült jogi problémákat és az Ön számára a legkedvezőbb megoldást dolgozzak ki.
                    </p>
                    <p className="leading-relaxed">
                      Szakterületeim között megtalálható a büntetőjog, adójog, polgári jog és a nemzetközi ügyletek kezelése. Célom, hogy ügyfeleim számára a lehető legjobb jogi megoldásokat biztosítsam.
                    </p>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                  <a 
                    href="tel:+36702777677"
                    className="group relative flex items-center justify-center gap-3 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <Phone size={20} className="transition-transform group-hover:scale-110 relative z-10" />
                    <span className="relative z-10 font-medium">+36 70 277 7677</span>
                  </a>
                  <a 
                    href="mailto:donat.nagy@drnd.hu"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-white text-primary-600 rounded-xl border border-primary-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Mail size={20} className="transition-transform group-hover:scale-110" />
                    <span className="font-medium">donat.nagy@drnd.hu</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}