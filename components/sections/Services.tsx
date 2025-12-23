"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "プチリフォーム",
    description: "水回りや、床、外壁塗装、屋根など\n部分的なリフォームのお手伝いをします",
    image: "/images/service-1.webp",
    labelBg: "bg-[#aea5a5]",
  },
  {
    title: "リノベーション",
    description: "長年暮らしてきた家や中古物件を今の\n理想の住居に作り替えるお手伝いをします",
    image: "/images/service-2.webp",
    labelBg: "bg-[#c9b896]",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-outer">
      <div className="max-w-6xl mx-auto bg-bg-content py-16 md:py-24 px-4">
        {/* タイトル部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-1/3"
        >
          <p className="text-sm text-gray-500 tracking-wider mb-1 text-right">
            Our Services
          </p>
          <div className="w-full h-px bg-gray-400 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-widest">
            サービス内容
          </h2>
        </motion.div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* 装飾的な四角（左上） */}
              <div className="absolute -left-3 -top-3 w-20 h-24 bg-gray-300 -z-10" />

              {/* 装飾的な四角（右下） */}
              <div className="absolute -right-3 bottom-8 w-6 h-28 bg-[#88d0df] -z-10" />

              {/* 画像 */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* テキストエリア */}
              <div className={`${service.labelBg} px-5 py-4`}>
                <h3 className="text-lg font-bold text-white tracking-widest mb-3">
                  {service.title}
                </h3>
                <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>

              {/* 矢印ボタン */}
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
