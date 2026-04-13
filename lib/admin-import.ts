import { baseProducts, storeCatalog } from "@/lib/mock-products";

export type AdminStoreInput = {
  id: string;
  name: string;
  category: string;
  city: string;
  latitude: number;
  longitude: number;
  services: string[];
  fulfillment: string;
  retailer_url: string;
};

export type AdminProductInput = {
  id: string;
  title: string;
  price: string;
  store: string;
  description: string;
  tags: string[];
  image: string;
  ai_score: number;
  rating: number;
  review_count: number;
  badge: string;
  delivery: string;
  gift_wrap: boolean;
  pickup: boolean;
  category: string;
  retailer_url: string;
  store_ids: string[];
};

export type AdminImportPayload = {
  stores: AdminStoreInput[];
  products: AdminProductInput[];
};

export const sampleImportPayload: AdminImportPayload = {
  stores: storeCatalog.map((store) => ({
    id: store.id,
    name: store.name,
    category: store.category,
    city: store.city,
    latitude: store.latitude,
    longitude: store.longitude,
    services: store.services,
    fulfillment: store.fulfillment,
    retailer_url: store.retailerUrl,
  })),
  products: baseProducts.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    store: product.store,
    description: product.description,
    tags: product.tags,
    image: product.image,
    ai_score: product.aiScore,
    rating: product.rating,
    review_count: product.reviewCount,
    badge: product.badge,
    delivery: product.delivery,
    gift_wrap: product.giftWrap,
    pickup: product.pickup,
    category: product.category,
    retailer_url: product.retailerUrl,
    store_ids: product.storeIds,
  })),
};

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((entry) => typeof entry === "string");

const isStore = (value: unknown): value is AdminStoreInput => {
  if (!value || typeof value !== "object") return false;
  const store = value as Record<string, unknown>;

  return (
    typeof store.id === "string" &&
    typeof store.name === "string" &&
    typeof store.category === "string" &&
    typeof store.city === "string" &&
    typeof store.latitude === "number" &&
    typeof store.longitude === "number" &&
    isStringArray(store.services) &&
    typeof store.fulfillment === "string" &&
    typeof store.retailer_url === "string"
  );
};

const isProduct = (value: unknown): value is AdminProductInput => {
  if (!value || typeof value !== "object") return false;
  const product = value as Record<string, unknown>;

  return (
    typeof product.id === "string" &&
    typeof product.title === "string" &&
    typeof product.price === "string" &&
    typeof product.store === "string" &&
    typeof product.description === "string" &&
    isStringArray(product.tags) &&
    typeof product.image === "string" &&
    typeof product.ai_score === "number" &&
    typeof product.rating === "number" &&
    typeof product.review_count === "number" &&
    typeof product.badge === "string" &&
    typeof product.delivery === "string" &&
    typeof product.gift_wrap === "boolean" &&
    typeof product.pickup === "boolean" &&
    typeof product.category === "string" &&
    typeof product.retailer_url === "string" &&
    isStringArray(product.store_ids)
  );
};

export const parseAdminImportPayload = (input: string): AdminImportPayload => {
  const parsed = JSON.parse(input) as unknown;
  if (!parsed || typeof parsed !== "object") {
    throw new Error("Payload must be a JSON object.");
  }

  const payload = parsed as Record<string, unknown>;
  if (!Array.isArray(payload.stores) || !payload.stores.every(isStore)) {
    throw new Error("`stores` must be an array of valid store records.");
  }

  if (!Array.isArray(payload.products) || !payload.products.every(isProduct)) {
    throw new Error("`products` must be an array of valid product records.");
  }

  return {
    stores: payload.stores,
    products: payload.products,
  };
};
