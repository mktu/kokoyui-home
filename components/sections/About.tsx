"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-outer">
      <div className="max-w-6xl mx-auto bg-bg-content py-16 md:py-24 px-4 relative">
        {/* 曲線の装飾 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-100 450 Q300 200 500 350 Q700 500 900 300 Q1100 100 1300 250"
            stroke="#fc9c83"
            strokeWidth="8"
            fill="none"
            opacity="0.5"
          />
        </svg>

        <div className="relative z-10">
        {/* タイトル部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full md:w-1/3"
        >
          <p className="text-sm text-[#c9a765] tracking-wider mb-1">
            About Cocoro × Yui Home
          </p>
          <div className="w-full h-px bg-[#c9a765] mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-widest">
            心結HOMEとは
          </h2>
        </motion.div>

        {/* テキスト */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left md:text-center"
        >
          <p className="text-gray-600 leading-loose tracking-wide">
            地域の人に愛されて15年、これまでプチリフォームから
            <br className="hidden md:inline" />
            新築のお手伝いまで数多くの住居に関するお悩みに
            <br className="hidden md:inline" />
            携わらせていただきました。困ったら心結HOMEと
            <br className="hidden md:inline" />
            いっていただけるように常にお客様に
            <br className="hidden md:inline" />
            〜寄り添う〜ことを大切に取り組んでいます。
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
