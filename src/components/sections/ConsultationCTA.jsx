// src/components/sections/ConsultationCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Users, Calendar, Clock } from 'lucide-react';

export default function ConsultationCTA() {
  const features = [
    {
      icon: Users,
      title: 'Személyes Konzultáció',
      description: 'Alapos esetmegbeszélés és stratégia kialakítása'
    },
    {
      icon: Calendar,
      title: 'Rugalmas Időpontok',
      description: 'Az Ön időbeosztásához alkalmazkodva'
    },
    {
      icon: Clock,
      title: '60 Perces Találkozó',
      description: 'Részletes helyzetelemzés és tanácsadás'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl opacity-60" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.50/3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.50/3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-sm font-medium text-primary-600 tracking-wide uppercase"
                >
                  Első Konzultáció Díjmentesen
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-display font-medium text-gray-900"
                >
                  Szakértő Jogi Támogatás{' '}
                  <span className="text-primary-600">Az Első Lépéstől</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600"
                >
                  Az ingyenes konzultáció során megismerjük az Ön helyzetét és személyre szabott jogi stratégiát dolgozunk ki.
                </motion.p>
              </div>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid gap-6"
              >
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact Card Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-primary-50/10 to-transparent" />
                
                <div className="relative space-y-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-display font-medium text-gray-900">
                      Egyeztessen Időpontot
                    </h3>
                    <p className="text-gray-600">
                      Válassza az Önnek megfelelő kapcsolatfelvételi módot
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="tel:+36702777677"
                      className="group flex items-center gap-4 p-5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-0.5">Telefonos Egyeztetés</div>
                        <div className="text-primary-100">+36 70 277 7677</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:donat.nagy@drnd.hu"
                      className="group flex items-center gap-4 p-5 bg-primary-50 text-primary-900 rounded-xl hover:bg-primary-100 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-0.5">Email Küldése</div>
                        <div className="text-primary-600">donat.nagy@drnd.hu</div>
                      </div>
                    </a>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    Az első konzultáció díjmentes, időtartama kb. 60 perc
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}