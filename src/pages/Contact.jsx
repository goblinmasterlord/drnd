// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Telefonos Elérhetőség",
    description: "Szakmai konzultáció és időpontegyeztetés telefonon keresztül.",
    details: [
      "Általános kérdések",
      "Időpontegyeztetés",
      "Gyors válaszok",
      "Azonnali elérhetőség"
    ],
    action: {
      text: "+36 70 277 7677",
      href: "tel:+36702777677"
    }
  },
  {
    icon: Mail,
    title: "Email Kapcsolat",
    description: "Részletes egyeztetés és dokumentumok küldése emailben.",
    details: [
      "Dokumentumok küldése",
      "Részletes egyeztetés",
      "Írásos tanácsadás",
      "24 órán belüli válasz"
    ],
    action: {
      text: "donat.nagy@drnd.hu",
      href: "mailto:donat.nagy@drnd.hu"
    }
  },
  {
    icon: Building,
    title: "Személyes Ügyintézés",
    description: "Modern, jól megközelíthető irodánk a belváros szívében.",
    details: [
      "Személyes konzultáció",
      "Dokumentumok áttekintése",
      "Szerződések aláírása",
      "Bizalmas megbeszélések"
    ],
    action: {
      text: "1234 Budapest, Példa utca 123.",
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
      {/* Hero Section - Matching Services page style */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.50/3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.50/3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6">
              Kapcsolat
            </h1>
            <p className="text-xl text-gray-600">
              Keressen bizalommal személyes konzultációért. Az első egyeztetés díjmentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section - Matching Services page style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8"
                >
                  {/* Multiple layered shadows for depth - matching Services page */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-100/50 to-white/20 transition-opacity opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow" />
                  <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-gray-200 transition-colors" />
                  
                  <div className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {info.description}
                      </p>
                      {info.action.href ? (
                        <a 
                          href={info.action.href}
                          className="text-lg text-primary-600 hover:text-primary-700 transition-colors font-medium"
                        >
                          {info.action.text}
                        </a>
                      ) : (
                        <span className="text-lg text-gray-900">
                          {info.action.text}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Hours & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-medium text-gray-900 mb-4">
                  Nyitvatartás
                </h2>
                <p className="text-gray-600">
                  Rugalmas időpontegyeztetési lehetőséggel állunk rendelkezésére
                </p>
              </div>

              <div className="space-y-4">
                {officeHours.map((schedule) => (
                  <div 
                    key={schedule.days}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
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

              <div className="p-6 bg-white rounded-2xl">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
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
              className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600">Térkép helye</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}