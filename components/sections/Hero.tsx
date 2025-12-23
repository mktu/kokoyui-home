"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 bg-bg-outer">
      {/* コンテンツ領域 */}
      <div className="max-w-6xl mx-auto bg-bg-content">
        {/* ファーストビュー部分 */}
        <div className="relative h-[700px]">
        {/* 装飾的な線 - 家をイメージした交差デザイン */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="800"
            height="700"
            viewBox="0 0 800 700"
            fill="none"
          >
            {/* 屋根の左斜め線（左下から頂点へ）- オレンジ */}
            <line
              x1="-50"
              y1="320"
              x2="400"
              y2="50"
              stroke="#ffca77"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* 屋根の右斜め線（頂点から右下へ）- 黄色 */}
            <line
              x1="400"
              y1="50"
              x2="850"
              y2="320"
              stroke="#f5c842"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* 交差する斜め線1（左上から右下）- ピンク */}
            <line
              x1="100"
              y1="80"
              x2="700"
              y2="550"
              stroke="#fc9c83"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* 交差する斜め線2（右上から左下）- 水色 */}
            <line
              x1="700"
              y1="120"
              x2="100"
              y2="580"
              stroke="#88d0df"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* 縦のアクセント線（左）- 水色 */}
            <line
              x1="120"
              y1="200"
              x2="120"
              y2="600"
              stroke="#88d0df"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* 縦のアクセント線（右）- 水色 */}
            <line
              x1="680"
              y1="200"
              x2="680"
              y2="600"
              stroke="#88d0df"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* 底辺の横線 - ピンク */}
            <line
              x1="0"
              y1="620"
              x2="800"
              y2="620"
              stroke="#fc9c83"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.45"
            />
          </svg>

          {/* 中央の縦点線 */}
          <div
            className="absolute w-0.5 border-l-2 border-dashed border-[#88d0df]"
            style={{
              height: '100%',
              left: '50%',
              top: '0',
              opacity: 0.3,
            }}
          />
        </div>

        {/* === 写真を中央コンテンツを囲むように配置 === */}

        {/* 左上 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ left: '5%', top: '30px', width: '160px', height: '120px' }}
        >
          <Image src="/images/hero-1.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 左中 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ left: '3%', top: '200px', width: '170px', height: '130px' }}
        >
          <Image src="/images/hero-4.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 左下 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ left: '5%', top: '380px', width: '180px', height: '140px' }}
        >
          <Image src="/images/hero-3.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 上中央左 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ left: '25%', top: '10px', width: '140px', height: '100px' }}
        >
          <Image src="/images/hero-5.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 上中央右 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ right: '25%', top: '10px', width: '140px', height: '100px' }}
        >
          <Image src="/images/hero-2.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 右上 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ right: '5%', top: '30px', width: '160px', height: '120px' }}
        >
          <Image src="/images/hero-6.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 右中 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ right: '3%', top: '200px', width: '170px', height: '130px' }}
        >
          <Image src="/images/hero-5.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 右下 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ right: '5%', top: '380px', width: '180px', height: '140px' }}
        >
          <Image src="/images/hero-4.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 下中央左 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ left: '28%', bottom: '20px', width: '130px', height: '100px' }}
        >
          <Image src="/images/hero-2.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* 下中央右 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          style={{ right: '28%', bottom: '20px', width: '130px', height: '100px' }}
        >
          <Image src="/images/hero-1.webp" alt="" fill className="object-cover" />
        </motion.div>

        {/* === 中央コンテンツ - Trust Life, True Life === */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/trust-life.webp"
              alt="Trust Life,"
              width={301}
              height={85}
              className="mx-auto"
            />
          </motion.div>

          {/* 手のイラスト */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-4"
          >
            <Image
              src="/images/hand.webp"
              alt=""
              width={240}
              height={180}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/true-life.webp"
              alt="True Life."
              width={342}
              height={84}
              className="mx-auto"
            />
          </motion.div>
        </div>
        </div>

        {/* 下部テキストセクション「そこに信頼できる場所」 */}
        <div className="relative py-16">
        {/* 黄色い円（左上寄り） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute rounded-full bg-gradient-to-b from-[#f7dc6f] to-[#f5c842]"
          style={{ left: '8%', top: '10px', width: '100px', height: '100px' }}
        />

        {/* オレンジ/ピンクの円（右下寄り） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute rounded-full bg-gradient-to-b from-[#f8b4a0] to-[#e8967e] opacity-80"
          style={{ right: '8%', bottom: '10px', width: '80px', height: '80px' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-[40px] font-serif text-gray-800 mb-8">
            そこに信頼できる場所
          </h2>
          <p className="text-gray-600 leading-loose tracking-wider">
            この町で積み重ねてきた確かな実績と
            <br />
            寄り添いでいつでも頼れる安心を届けます。
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
