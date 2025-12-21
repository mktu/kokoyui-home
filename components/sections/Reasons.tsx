"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: "/images/icon-1.webp",
    title: "営業者を挟まない",
    description:
      "通常ご提案や間取り制作などを担当する営業の方と工事を担う工務店が別であることが多いため、工事が始まってから思っていた対応や内容と違うなどのトラブルが発生することも少なくはありません。当店では建築士が在籍するので最初のご提案から工事の面まで一貫して行うことが可能です。",
    gradient: "from-[#ffd7c6] to-[#ffa790]",
  },
  {
    icon: "/images/icon-2.webp",
    title: "低コストを実現",
    description:
      "こちらもあいだ間に業者を挟まないことで他の工務店とは違いコストを抑えたご提案が可能です。またご提案の際にお客様の理想のすまいに合わせて本当に必要なもの不要なものもお伝えさせていただきます。",
    gradient: "from-[#fff0a3] to-[#feb35b]",
  },
  {
    icon: "/images/icon-3.webp",
    title: "安心の実績",
    description:
      "これまで長きにわたり地域密着をテーマに取り組んできたので、ご利用者様からのご紹介なども多く、お客様からのお喜びの声も多数いただいております!何から始めたらいいか分からないちょっとしたお悩みなども、ぜひお気軽にご相談ください。",
    gradient: "from-[#c9f1f9] to-[#77cdde]",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="py-20 md:py-28 relative overflow-hidden">
      {/* 装飾的な背景 */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionTitle
          label="Our Strengths"
          title="私たちが選ばれる理由"
          subtitle="心結HOMEが多くのお客様に選ばれる理由"
        />

        <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${index === 1 ? "md:mt-12" : index === 2 ? "md:mt-24" : ""}`}
            >
              <div
                className={`w-full md:w-[350px] rounded-[20px] p-6 pt-20 pb-8 bg-gradient-to-b ${reason.gradient} text-white min-h-[400px]`}
              >
                {/* アイコン */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 relative">
                  <Image
                    src={reason.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-center mb-4 mt-8">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
