"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Message() {
  return (
    <section className="relative overflow-hidden bg-bg-outer">
      <div className="max-w-6xl mx-auto bg-bg-content py-16 md:py-24 px-4 relative">
        {/* 曲線の装飾 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M1300 100 Q1000 300 800 150 Q600 0 400 200 Q200 400 -100 300"
            stroke="#fc9c83"
            strokeWidth="8"
            fill="none"
            opacity="0.4"
          />
        </svg>

        {/* タイトル部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full md:w-1/3"
        >
          <p className="text-sm text-gray-500 tracking-wider mb-1">
            Message
          </p>
          <div className="w-full h-px bg-gray-400 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-widest">
            メッセージ
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 代表者写真 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-[374px] mx-auto rounded-b-[150px] overflow-hidden relative">
              <Image
                src="/images/message.webp"
                alt="代表者"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* メッセージ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-gray-600 leading-loose space-y-4">
              <p>お客様に支えられ今の心結HOME があります。</p>
              <p>皆様にとってのベストな形を提供できるよう</p>
              <p>どんな時でも安心していただけるように</p>
              <p>寄り添ってまいります!</p>
              <p>小さなお悩みから生涯に関わる大切なご相談まで、</p>
              <p>まずは一度お聞かせください。</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
