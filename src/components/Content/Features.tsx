"use client";
import { motion, useInView } from "framer-motion";
import {
  BarChart2Icon,
  BrainCircuitIcon,
  Clock10Icon,
  MousePointer2,
  PhoneCallIcon,
  Settings2Icon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Features = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already triggered
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the section
  const isInView = useInView(sectionRef); // Hook to check if section is in view

  useEffect(() => {
    // Trigger animation only once when the section comes into view
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // Mark the animation as triggered
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
      className="py-32 font-poppins"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 gap-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 xl:mt-24">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="p-12 card bg-primary-content"
          >
            <BrainCircuitIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Çeşitli Mantık Problemlerine Erişim
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Uygulamanızda çocuklar farklı mantık problemlerine erişebilir.
              Örneğin, "farklı olanı bul" veya "sudoku" gibi oyunlar sayesinde
              çocuklar algoritmalarla bir yol bularak ilerleyebilirler. Bu
              sayede çocuklar, çeşitli kaynaklardan mantık problemlerine
              ulaşarak yaratıcı çözümler geliştirmeyi öğrenirler.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="p-12 card bg-primary-content"
          >
            <MousePointer2 className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            Problemleri Takip Etme ve İlerleme Kayıtları            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Çocuklar çözüm aşamalarında ilerleme kaydeder ve puanlarını
              uygulama içerisinde izleyebilirler. Bu özellik, farklı
              seviyelerdeki oyunların bir bütün olarak çocukların gelişim
              sürecini takip etmelerini sağlar.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="p-12 card bg-primary-content"
          >
            <Settings2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            Kişiselleştirilebilir Zorluk Seviyeleri
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
            Oyunları çocukların seviyesine göre özelleştirmek, farklı zorluk seviyelerindeki görevlerin yaratılmasını sağlar. Çocuklar, kendi seviyelerine uygun problemlerle uğraşırken, başarı ve motivasyonları artar.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-12 card bg-primary-content"
          >
            <Clock10Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            Günlük Zeka Soruları ve Zamanlayıcı
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
            Çocukların her gün yeni bir zeka sorusuna cevap verme şansı tanınabilir. Örneğin, "Bugünün Zeka Sorusu" gibi bir bölümle çocuklar, belirli bir süre içinde problemi çözmek için çalışarak, günlük bir rutin oluşturabilirler.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1 }}
            className="p-12 card bg-primary-content"
          >
            <PhoneCallIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            İletişim ve Sosyal Paylaşım Alanı
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
            Çocuklar başarılarını ve çözümlerini arkadaşlarıyla paylaşabilir veya diğer kullanıcılarla ipuçları üzerinde tartışabilirler. Bu sayede çocuklar takım çalışması yapmayı ve farklı bakış açılarını öğrenirler.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="p-12 card bg-primary-content"
          >
            <BarChart2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            Gelişim ve İlerlemenin Analizi
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
            Uygulama, çocukların gelişimini ve beceri kazanımlarını analiz edebilir. Örneğin, çocuklar hangi zeka türlerinde daha güçlü olduklarını görebilir, böylece odaklanmaları gereken alanları belirleyebilirler.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
