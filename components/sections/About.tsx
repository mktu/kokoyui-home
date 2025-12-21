"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* 装飾的な曲線 */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg viewBox="0 0 400 600" className="w-full h-full" fill="none">
          <path
            d="M400 0 Q200 150 300 300 Q400 450 200 600"
            stroke="#F8B4C0"
            strokeWidth="80"
            fill="none"
          />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          label="About Us"
          title="心結HOMEとは"
          subtitle="私たちが大切にしていること"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              「心」と「心」を結ぶ
              <br />
              住まいづくりのパートナー
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                心結HOMEは、「お客様の心」と「住まい」、
                そして「私たちの想い」を結ぶことを大切にしています。
              </p>
              <p>
                リフォーム・リノベーションは単なる工事ではありません。
                お客様の夢や理想、日々の暮らしへの想いを形にする大切なプロジェクトです。
              </p>
              <p>
                だからこそ、私たちはお客様との対話を何より大切にし、
                一緒に最適な住まいのカタチを探していきます。
              </p>
            </div>
          </motion.div>

          {/* イメージ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent-pink/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-4xl">🏠</span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    イラスト・スタッフ写真
                  </span>
                </div>
              </div>
            </div>
            {/* 装飾的な円 */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-yellow/30 rounded-full" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-blue/30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
