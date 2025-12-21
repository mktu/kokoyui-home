"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* 装飾的な線 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* オレンジの斜め線 */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[10%] left-[60%] w-[600px] h-[20px] bg-[#ffca77] origin-left rotate-[-30deg]" />
          <div className="absolute top-[15%] left-[0%] w-[650px] h-[20px] bg-[rgba(252,156,131,0.6)] origin-left" />
          <div className="absolute top-[70%] right-[10%] w-[500px] h-[20px] bg-[rgba(86,143,155,0.6)] origin-left" />
        </div>

        {/* 水色の斜め線 */}
        <div className="absolute top-[50%] right-0 w-[20px] h-[500px] bg-[rgba(136,208,223,0.6)]" />
        <div className="absolute top-[20%] right-[20%] w-[600px] h-[20px] bg-[rgba(201,167,101,0.6)] origin-left rotate-[45deg]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="mb-6">
              <Image
                src="/images/trust-life.webp"
                alt="Trust Life,"
                width={301}
                height={85}
                className="mx-auto lg:mx-0"
              />
              <Image
                src="/images/true-life.webp"
                alt="True Life."
                width={342}
                height={84}
                className="mx-auto lg:mx-0 mt-4"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              そこに信頼できる場所
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors text-center"
              >
                無料相談はこちら
              </Link>
              <Link
                href="#services"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-colors text-center"
              >
                サービスを見る
              </Link>
            </div>
          </motion.div>

          {/* イメージコラージュ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* メイン画像 */}
              <div className="col-span-2 row-span-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/hero-1.webp"
                    alt="家族の写真"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/hero-5.webp"
                    alt="スタッフ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/hero-6.webp"
                    alt="インテリア"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-4 gap-2">
                  {["hero-2", "hero-3", "hero-4", "hand"].map((img) => (
                    <div
                      key={img}
                      className="aspect-square rounded-lg overflow-hidden relative"
                    >
                      <Image
                        src={`/images/${img}.webp`}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 15vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
