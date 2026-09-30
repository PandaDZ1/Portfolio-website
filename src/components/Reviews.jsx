import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: '1105386',
    author: 'خالد ص. (Khaled S.)',
    initial: 'خ',
    rating: 5,
    arabicText: 'تسلم يدك وان شاء الله ما يكون أخر تعامل معاك',
    englishText: 'Bless your hands, and God willing this won\'t be our last collaboration.',
    link: 'https://khamsat.com/user/lp11/reviews/1105386'
  },
  {
    id: '1106874',
    author: '.Drdm C',
    initial: 'D',
    rating: 5,
    arabicText: 'مقدم خدمه مبدع وراقي، انصح به قدم الخدمه وهدايا فوقها، شكرا لك',
    englishText: 'Creative and sophisticated service provider. Highly recommended, delivered the service with bonus gifts on top. Thank you!',
    link: 'https://khamsat.com/user/lp11/reviews/1106874'
  },
  {
    id: '1038684',
    author: 'Majed A. (ماجد ع.)',
    initial: 'M',
    rating: 5,
    arabicText: 'شخص ذو خلق رفيع وممتاز في التعامل',
    englishText: 'A person of high moral character and truly excellent to work with.',
    link: 'https://khamsat.com/user/lp11/reviews/1038684'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="pt-8 pb-24 bg-[#fefae0] dark:bg-[#151c11] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle, elegant delimitation between Featured Projects & Reviews */}
        <div className="w-24 h-0.5 bg-[#283618]/15 dark:bg-[#dda15e]/25 rounded-full mx-auto mb-14" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#283618] dark:text-[#fefae0] transition-colors" style={{ fontFamily: "'Caveat', cursive" }}>
            Client Reviews
          </h2>
        </motion.div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white dark:bg-[#1c2617] rounded-3xl p-8 border border-[#283618]/10 dark:border-[#dda15e]/20 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#dda15e]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={28} className="text-[#dda15e]/40 group-hover:text-[#dda15e] transition-colors" />
                </div>

                {/* Arabic Quote */}
                <p 
                  dir="rtl" 
                  className="text-lg font-bold text-[#283618] dark:text-[#fefae0] leading-relaxed mb-3 font-sans"
                >
                  "{rev.arabicText}"
                </p>

                {/* English Subtitle */}
                <p className="text-sm text-gray-600 dark:text-[#a3b18a] italic leading-relaxed mb-6 font-sans">
                  "{rev.englishText}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-5 border-t border-gray-100 dark:border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#283618] dark:bg-[#dda15e] text-[#fefae0] dark:text-[#1c2617] font-bold flex items-center justify-center text-sm shadow-md">
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#283618] dark:text-[#fefae0] leading-snug">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-[#dda15e] font-semibold block">
                        Verified Khamsat Review
                      </span>
                    </div>
                  </div>

                  <a
                    href={rev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-gray-400 hover:text-[#dda15e] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    title="View verified review on Khamsat"
                    aria-label="View verified review on Khamsat"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
