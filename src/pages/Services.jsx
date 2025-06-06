import { motion } from 'framer-motion';
import { Scale, Calculator, FileText, Gavel, Check, Phone, Mail, Plane } from 'lucide-react';
import { useHashScroll } from '../hooks/useHashScroll';

const services = [
  {
    id: "criminal",
    title: "Büntetőjog",
    description: "Szakértő védelem és képviselet bűntető eljárás minden szakaszában.",
    icon: Scale,
    services: [
      "Terhelti képviselet",
      "Képviselet nyomozati szakban",
      "Bírósági képviselet",
      "Tanácsadás és konzultáció"
    ]
  },
  {
    id: "tax",
    title: "Adójog",
    description: "Átfogó adójogi tanácsadás és képviselet adóhatósági eljárásokban. Optimalizált megoldások vállalkozások számára.",
    icon: Calculator,
    services: [
      "Adóhatósági képviselet",
      "Tanácsadás adótervezésben",
      "Adóellenőrzések kezelése",
      "Adóhatósági állásfoglalás kérése",
      "Fellebbezések készítése",
      "Adókockázat elemzés",
      "Nemzetközi adótervezés"
    ]
  },
  {
    id: "transfer",
    title: "Transzferár",
    description: "Fődokumentum (Master File) és helyi dokumentum (Local File) készítése angol és magyar nyelven",
    icon: FileText,
    services: [
      "Proffesszionális transzferár dokumtációk készítése és tanácsadás",
      "Megfelelőségi vizsgálatok",
      "Hatósági eljárások kezelése",
      "Transzferár-politika kialakítása",
      "Segítség árképzésben és szokásos piaci kamat megállapításában",
      "Külföldi dokumentáció átultetése a magyar szabályoknak megfelelően",
      "Nemzetközi tranzakciók támogatása"
    ]
  },
  {
    id: "civil",
    title: "Polgári jog",
    description: "Átfogó polgári jogi képviselet és tanácsadás magánszemélyek és vállalkozások részére. Szerződések és jogviták szakértő kezelése.",
    icon: Gavel,
    services: [
      "Szerződések készítése",
      "Ingatlanügyek",
      "Peres képviselet",
      "Követeléskezelés",
      "Mediáció",
      "Cégképviselet"
    ]
  },
  {
    id: "immigration",
    title: "Idegenrendészet",
    description: "Szakértő támogatás bevándorlási ügyekben.",
    icon: Plane,
    services: [
      "Tartózkodási engedélyek",
      "Letelepedési engedélyek",
      "Munkavállalási engedélyek",
      "Vízumügyintézés"
    ]
  }
];

export default function Services() {
  // Initialize hash scroll handling
  useHashScroll();

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
              <span className="relative">Jogi Szolgáltatások</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-gray-900 tracking-tight">
              Szakterületek
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Professzionális jogi szolgáltatások széles körű portfóliója, személyre szabott megoldásokkal és szakértő támogatással.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            id={service.id}
            key={service.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} scroll-mt-20`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto"
              >
                {/* Service Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {service.services.map((item, idx) => (
                    <div 
                      key={idx}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-5 h-5 mt-0.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                        <Check className="w-3 h-3 text-primary-600" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Contact CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-200 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary-200 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary-200 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary-200 rounded-br-2xl" />
              
              <div className="relative text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900">
                  Kezdjük meg az együttműködést
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Keressen bizalommal egy személyes egyeztetésért.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                  <a 
                    href="tel:+36702777677"
                    className="group flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 w-full sm:w-auto relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <Phone size={20} className="transition-transform group-hover:scale-110 relative z-10" />
                    <span className="relative z-10">+36 70 277 7677</span>
                  </a>
                  <a 
                    href="mailto:donat.nagy@drnd.hu"
                    className="group flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl border border-primary-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 w-full sm:w-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                  >
                    <Mail size={20} className="transition-transform group-hover:scale-110" />
                    <span>donat.nagy@drnd.hu</span>
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