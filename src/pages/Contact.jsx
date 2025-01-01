// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Telefonos Elérhetőség",
    action: {
      text: "+36 70 277 7677",
      href: "tel:+36702777677"
    }
  },
  {
    icon: Mail,
    title: "Email Kapcsolat",
    action: {
      text: "donat.nagy@drnd.hu",
      href: "mailto:donat.nagy@drnd.hu"
    }
  },
  {
    icon: MapPin,
    title: "Személyes Ügyintézés",
    action: {
      text: "1086 Budapest, Lujza u. 1/B I/11",
      href: null
    }
  }
];

const officeHours = [
  { days: 'Hétfő - Péntek', hours: '9:00 - 17:00' },
  { days: 'Szombat', hours: 'Előzetes Egyeztetéssel' },
  { days: 'Vasárnap', hours: 'Zárva' }
];

export default function Contact() {
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
              <span className="relative">Kapcsolatfelvétel</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-gray-900 tracking-tight">
              Kapcsolat
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Keressen bizalommal személyes konzultációért. Az első egyeztetés díjmentes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="tel:+36702777677"
                className="group flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors w-full sm:w-auto"
              >
                <Phone size={18} className="transition-transform group-hover:scale-110" />
                <span>+36 70 277 7677</span>
              </a>
              <a 
                href="mailto:donat.nagy@drnd.hu"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-lg border border-primary-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all w-full sm:w-auto"
              >
                <Mail size={18} className="transition-transform group-hover:scale-110" />
                <span>donat.nagy@drnd.hu</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl p-6 transition-all duration-300"
                  >
                    {/* Card effects */}
                    <div className="absolute inset-0 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-500" />
                    <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-primary-100 transition-colors duration-300" />
                    
                    <div className="relative space-y-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.action.href ? (
                          <a 
                            href={info.action.href}
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {info.action.text}
                          </a>
                        ) : (
                          <span className="text-gray-600">{info.action.text}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image Container */}
              <div className="lg:col-span-2">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Profilkép helye</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary-50/50 rounded-2xl -z-10" />
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gray-100 rounded-2xl -z-10" />
                </div>
              </div>

              {/* Introduction Text */}
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-medium text-gray-900">
                    Dr. Nagy Donát vagyok
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      15 éves szakmai tapasztalattal rendelkező ügyvéd vagyok, aki szakértelmét az ügyfelek szolgálatába állítja. Hiszek abban, hogy minden jogi kihívásra van megfelelő megoldás.
                    </p>
                    <p className="leading-relaxed">
                      Szakterületeim között megtalálható a büntetőjog, adójog, polgári jog és a nemzetközi ügyletek kezelése. Célom, hogy ügyfeleim számára a lehető legjobb jogi megoldásokat biztosítsam.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-display font-medium text-primary-600">15+</div>
                    <div className="text-sm text-gray-600">év szakmai tapasztalat</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-display font-medium text-primary-600">500+</div>
                    <div className="text-sm text-gray-600">sikeres ügy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-display font-medium text-primary-600">4.9</div>
                    <div className="text-sm text-gray-600">ügyfélelégedettség</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-display font-medium text-gray-900 mb-4">
                    Nyitvatartás
                  </h2>
                  <p className="text-gray-600">
                    Rugalmas időpontegyeztetési lehetőséggel állunk rendelkezésére
                  </p>
                </div>

                <div className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div 
                      key={schedule.days}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="font-medium text-gray-900">
                          {schedule.days}
                        </span>
                        <span className="text-gray-600">
                          {schedule.hours}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Megközelítés
                      </h3>
                      <p className="text-gray-600">
                        Az irodánk a belvárosban, kiváló közlekedési kapcsolatokkal rendelkező helyen található. M3 metró Nyugati tér megállójától 2 perc sétára.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Container */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden bg-gray-100 min-h-[400px] lg:min-h-full"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Térkép helye</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}