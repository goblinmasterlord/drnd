import { motion } from 'framer-motion';
import { Scale, Calculator, FileText, Gavel, ChevronRight, Phone, Mail } from 'lucide-react';

const services = [
  {
    id: "criminal",
    title: "Büntetőjog",
    description: "Szakértő védelem és képviselet büntetőjogi eljárásokban. Tapasztalt védelem a teljes eljárás során.",
    icon: Scale,
    services: [
      "Büntetőjogi védelem",
      "Képviselet nyomozati szakban",
      "Bírósági képviselet",
      "Fellebbezések készítése",
      "Alkotmányjogi panaszok",
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
      "Adótervezés és optimalizálás",
      "Adóellenőrzések kezelése",
      "Fellebbezések készítése",
      "Adókockázat elemzés",
      "Nemzetközi adótervezés"
    ]
  },
  {
    id: "transfer",
    title: "Transzferár",
    description: "Professzionális transzferár-dokumentáció készítése és megfelelőségi tanácsadás multinacionális vállalatok számára.",
    icon: FileText,
    services: [
      "Transzferár-dokumentáció készítése",
      "Megfelelőségi vizsgálatok",
      "Előzetes ármegállapítás (APA)",
      "Hatósági eljárások kezelése",
      "Transzferár-politika kialakítása",
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
      "Kártérítési ügyek",
      "Peres képviselet",
      "Követeléskezelés",
      "Mediáció",
      "Cégképviselet"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
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
              Szakterületek
            </h1>
            <p className="text-xl text-gray-600">
              Professzionális jogi szolgáltatások széles körű portfóliója, 
              személyre szabott megoldásokkal és szakértő támogatással.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto"
              >
                {/* Service Header */}
                <div className="flex items-start gap-6 mb-12">
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
                      className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary-100 hover:shadow-md transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
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
                  Kezdjük Meg az Együttműködést
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Keressen bizalommal egy személyes egyeztetésért. Az első konzultáció díjmentes.
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