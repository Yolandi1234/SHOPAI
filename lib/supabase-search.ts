import {
  Coordinates,
  Product,
  StoreLocation,
  SearchExperience,
  baseProducts,
  buildSearchExperienceFromCatalog,
  storeCatalog,
} from "@/lib/mock-products";
import { hasSupabaseEnv, supabase } from "@/lib/supabase";

type ProductRow = {
  id: string;
  title: string;
  price: string;
  store: string;
  description: string;
  tags: string[] | null;
  image: string;
  ai_score: number;
  human_rating: number;
  human_review_count: number;
  badge: string;
  delivery: string;
  gift_wrap: boolean;
  pickup: boolean;
  category: string;
  retailer_url: string;
  store_ids: string[] | null;
};

type StoreRow = {
  id: string;
  name: string;
  category: string;
  city: string;
  latitude: number;
  longitude: number;
  services: string[] | null;
  fulfillment: string;
  retailer_url: string;
};

const normalizeProducts = (rows: ProductRow[]): Product[] =>
  rows.map((row) => ({
    id: row.id,
    title: row.title,
    price: row.price,
    store: row.store,
    description: row.description,
    tags: row.tags ?? [],
    image: row.image,
    aiScore: row.ai_score,
    humanRating: row.human_rating,
    humanReviewCount: row.human_review_count,
    badge: row.badge,
    delivery: row.delivery,
    giftWrap: row.gift_wrap,
    pickup: row.pickup,
    storeDistance: "",
    category: row.category,
    retailerUrl: row.retailer_url,
    storeIds: row.store_ids ?? [],
  }));

const normalizeStores = (rows: StoreRow[]): StoreLocation[] =>
  rows.map((row) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    city: row.city,
    latitude: row.latitude,
    longitude: row.longitude,
    services: row.services ?? [],
    fulfillment: row.fulfillment,
    retailerUrl: row.retailer_url,
  }));

const filterProducts = (query: string, products: Product[]) => {
  const normalized = query.toLowerCase().trim();
  if (!normalized) {
    return products.slice(0, 6);
  }

  const matches = products.filter((product) => {
    const haystack =
      `${product.title} ${product.store} ${product.description} ${product.tags.join(" ")}`.toLowerCase();

    return normalized
      .split(/\s+/)
      .every((term) => haystack.includes(term.replace(/[^\w-]/g, "")));
  });

  if (matches.length > 0) {
    return matches.slice(0, 6);
  }

  return products
    .filter(
      (product) =>
        product.tags.some((tag) => normalized.includes(tag)) ||
        normalized.includes(product.category.toLowerCase()) ||
        normalized.includes(product.store.toLowerCase())
    )
    .slice(0, 6);
};

export const getSearchExperienceWithSupabase = async (
  query: string,
  location?: Coordinates
): Promise<{ experience: SearchExperience; source: "supabase" | "mock" }> => {
  if (!hasSupabaseEnv || !supabase) {
    return {
      experience: buildSearchExperienceFromCatalog(query, baseProducts, storeCatalog, location),
      source: "mock",
    };
  }

  try {
    const [{ data: productRows, error: productError }, { data: storeRows, error: storeError }] =
      await Promise.all([
        supabase.from("products").select("*"),
        supabase.from("stores").select("*"),
      ]);

    if (productError || storeError || !productRows || !storeRows) {
      throw productError ?? storeError ?? new Error("Missing Supabase catalog data");
    }

    const products = filterProducts(query, normalizeProducts(productRows as ProductRow[]));
    const stores = normalizeStores(storeRows as StoreRow[]);

    if (products.length === 0 || stores.length === 0) {
      throw new Error("Supabase tables returned no usable catalog records");
    }

    return {
      experience: buildSearchExperienceFromCatalog(query, products, stores, location),
      source: "supabase",
    };
  } catch {
    return {
      experience: buildSearchExperienceFromCatalog(query, baseProducts, storeCatalog, location),
      source: "mock",
    };
  }
};
