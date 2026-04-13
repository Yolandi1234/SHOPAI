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
      className="glass-panel group overflow-hidden rounded-[28px] border border-white/10 shadow-card"
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gradient-to-r from-pink-400/20 to-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {product.badge}
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-white/10">
            AI Match {product.aiScore}%
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">{product.store}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{product.title}</h3>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-gold ring-1 ring-white/10">
            {product.price}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{product.description}</p>

        <div className="grid gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-slate-300">
          <div className="flex items-center justify-between gap-3">
            <span>AI rating</span>
            <span className="font-semibold text-white">
              {product.rating.toFixed(1)} / 5 ({product.reviewCount})
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Closest store</span>
            <span className="font-semibold text-white">{product.storeDistance}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Service</span>
            <span className="text-right font-semibold text-cyan-100">{product.delivery}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.giftWrap ? (
            <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-3 py-1 text-xs text-pink-100">
              Gift wrap available
            </span>
          ) : null}
          {product.pickup ? (
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
              Pickup available
            </span>
          ) : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={product.retailerUrl}
            className="rounded-full border border-cyan-300/30 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-pink-300/40 hover:bg-white/10"
          >
            Visit Shop Page
          </a>
          <a
            href="#nearby-stores"
            className="rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-95"
          >
            Find Nearby Store
          </a>
        </div>
      </div>
    </motion.article>
  );
}
