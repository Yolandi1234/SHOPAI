"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/mock-products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,22,49,0.78),rgba(5,13,28,0.72))] shadow-card backdrop-blur-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{product.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{product.store}</p>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-gold ring-1 ring-white/10 shadow-[0_0_22px_rgba(245,203,103,0.08)]">
            {product.price}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-gradient-to-r from-pink-400/18 to-cyan-400/18 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {product.badge}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-200">
            AI Match {product.aiScore}%
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{product.description}</p>

        <div className="grid gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-slate-300">
          <div className="flex items-center justify-between gap-3">
            <span>Human rating</span>
            <span className="font-semibold text-white">
              {product.humanRating.toFixed(1)} / 5 ({product.humanReviewCount})
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Store</span>
            <span className="font-semibold text-white">{product.store}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Location</span>
            <span className="text-right font-semibold text-cyan-100">{product.storeDistance}</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={product.retailerUrl}
            className="rounded-full border border-cyan-300/30 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-pink-300/40 hover:bg-white/10"
          >
            View Store
          </a>
          <a
            href="#nearby-stores"
            className="rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-95"
          >
            Nearby Shops
          </a>
        </div>
      </div>
    </motion.article>
  );
}
