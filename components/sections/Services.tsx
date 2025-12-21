"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "プチリフォーム",
    description:
      "水回りや、床、外壁塗装、屋根など部分的なリフォームのお手伝いをします。",
    features: ["キッチンリフォーム", "浴室リフォーム", "外壁塗装", "屋根工事"],
    image: "/images/service-1.webp",
    bgColor: "bg-[#aea5a5]",
  },
  {
    title: "リノベーション",
    description:
      "長年暮らしてきた家や中古物件を今の理想の住居に作り替えるお手伝いをします。",
    features: ["中古住宅リノベ", "マンションリノベ", "デザイン設計", "耐震補強"],
    image: "/images/service-2.webp",
    bgColor: "bg-[#d9cdaf]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="section-container">
        <SectionTitle
          label="Our Services"
          title="サービス内容"
          subtitle="お客様のニーズに合わせた最適なプランをご提案します"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* 画像 */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* コンテンツ */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
