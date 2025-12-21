"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            そこに信頼できる場所
          </h2>
          <p className="text-gray-600 leading-loose text-base md:text-lg">
            心結HOMEは、お客様一人ひとりの「暮らし」に寄り添い、
            <br className="hidden md:block" />
            理想の住まいを形にするリフォーム・リノベーション会社です。
            <br className="hidden md:block" />
            家族の笑顔が生まれる場所、安心して帰ってこられる場所。
            <br className="hidden md:block" />
            私たちは、そんな「信頼できる場所」づくりをお手伝いします。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
