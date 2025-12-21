"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Message() {
  return (
    <section className="py-20 md:py-28 bg-[#f4f4f4] relative overflow-hidden">
      <div className="section-container relative z-10">
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
            <div className="mb-8">
              <span className="inline-block text-sm text-primary font-medium mb-2 tracking-wider">
                Message
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                メッセージ
              </h2>
            </div>

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
