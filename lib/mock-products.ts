export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type StoreLocation = {
  id: string;
  name: string;
  category: string;
  city: string;
  latitude: number;
  longitude: number;
  services: string[];
  fulfillment: string;
  retailerUrl: string;
};

export type Product = {
  id: string;
  title: string;
  price: string;
  store: string;
  description: string;
  tags: string[];
  image: string;
  aiScore: number;
  humanRating: number;
  humanReviewCount: number;
  badge: string;
  delivery: string;
  giftWrap: boolean;
  pickup: boolean;
  storeDistance: string;
  category: string;
  retailerUrl: string;
  storeIds: string[];
};

export type SearchExperience = {
  products: Product[];
  topPick?: Product;
  nearbyStores: Array<StoreLocation & { distanceKm: number; distanceLabel: string }>;
  serviceHighlights: string[];
  aiSummary: string;
  userAreaLabel: string;
};

const makeSvgDataUrl = (label: string, toneA: string, toneB: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${toneA}" />
          <stop offset="100%" stop-color="${toneB}" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="36" fill="url(#g)" />
      <circle cx="640" cy="130" r="110" fill="rgba(255,255,255,0.14)" />
      <circle cx="140" cy="460" r="140" fill="rgba(255,255,255,0.12)" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Segoe UI, Arial, sans-serif" font-size="48" font-weight="700">${label}</text>
    </svg>
  `)}`;

export const defaultCoordinates: Coordinates = {
  latitude: -26.2041,
  longitude: 28.0473,
};

export const storeCatalog: StoreLocation[] = [
  {
    id: "kindred-sandton",
    name: "Kindred Gifts Sandton",
    category: "Gifting",
    city: "Sandton",
    latitude: -26.1076,
    longitude: 28.0567,
    services: ["Gift wrapping", "Doorstep delivery", "Handwritten notes"],
    fulfillment: "Gift wrapped and delivered today",
    retailerUrl: "#",
  },
  {
    id: "style-rosebank",
    name: "Style District Rosebank",
    category: "Fashion",
    city: "Rosebank",
    latitude: -26.1457,
    longitude: 28.0424,
    services: ["Same-day fitting pickup", "Gift wrapping", "Express courier"],
    fulfillment: "Same-day delivery available",
    retailerUrl: "#",
  },
  {
    id: "techhub-sandton",
    name: "Tech Hub Sandton City",
    category: "Tech",
    city: "Sandton",
    latitude: -26.1078,
    longitude: 28.0528,
    services: ["30-minute pickup", "Instant stock reservation", "Courier dispatch"],
    fulfillment: "Ready for pickup in 30 minutes",
    retailerUrl: "#",
  },
  {
    id: "novawear-melrose",
    name: "Nova Wear Melrose",
    category: "Wearables",
    city: "Melrose",
    latitude: -26.1333,
    longitude: 28.0686,
    services: ["Gift wrapping", "Collection point", "Priority delivery"],
    fulfillment: "Free delivery in 1-2 days",
    retailerUrl: "#",
  },
  {
    id: "pethaven-randburg",
    name: "Pet Haven Randburg",
    category: "Pets",
    city: "Randburg",
    latitude: -26.0948,
    longitude: 27.9861,
    services: ["Large-item delivery", "Curbside pickup", "Pet care advice"],
    fulfillment: "Next-day courier delivery",
    retailerUrl: "#",
  },
  {
    id: "nestliving-fourways",
    name: "Nest Living Fourways",
    category: "Home",
    city: "Fourways",
    latitude: -26.0226,
    longitude: 28.0127,
    services: ["Decor gifting", "Courier delivery", "Scheduled drop-off"],
    fulfillment: "Courier delivery available",
    retailerUrl: "#",
  },
];

export const baseProducts: Product[] = [
  {
    id: "1",
    title: "Blush Satin Midi Dress",
    price: "R499",
    store: "Style District",
    description: "Elegant satin finish with a soft drape and occasion-ready silhouette.",
    tags: ["pink", "dress", "fashion", "women", "gift"],
    image: makeSvgDataUrl("Blush Dress", "#ff5ecf", "#695bff"),
    aiScore: 91,
    humanRating: 4.7,
    humanReviewCount: 182,
    badge: "Top Recommended",
    delivery: "Same-day delivery available",
    giftWrap: true,
    pickup: true,
    storeDistance: "",
    category: "Fashion",
    retailerUrl: "#",
    storeIds: ["style-rosebank"],
  },
  {
    id: "2",
    title: "Orthopedic Dog Bed XL",
    price: "R899",
    store: "Pet Haven",
    description: "Large-breed comfort with memory foam support and washable cover.",
    tags: ["dog", "bed", "large", "pets", "comfort"],
    image: makeSvgDataUrl("Dog Bed", "#54c6ff", "#0b2350"),
    aiScore: 89,
    humanRating: 4.8,
    humanReviewCount: 324,
    badge: "Comfort Pick",
    delivery: "Next-day courier delivery",
    giftWrap: false,
    pickup: true,
    storeDistance: "",
    category: "Pets",
    retailerUrl: "#",
    storeIds: ["pethaven-randburg"],
  },
  {
    id: "3",
    title: "Teacher Appreciation Gift Box",
    price: "R329",
    store: "Kindred Gifts",
    description: "Curated wellness and stationery set made for thoughtful thank-yous.",
    tags: ["gift", "teacher", "box", "stationery"],
    image: makeSvgDataUrl("Gift Box", "#ff92b7", "#f5cb67"),
    aiScore: 98,
    humanRating: 4.9,
    humanReviewCount: 411,
    badge: "Best Gift Match",
    delivery: "Gift wrapped and delivered today",
    giftWrap: true,
    pickup: false,
    storeDistance: "",
    category: "Gifting",
    retailerUrl: "#",
    storeIds: ["kindred-sandton"],
  },
  {
    id: "4",
    title: "Samsung 45W USB-C Charger",
    price: "R449",
    store: "Tech Hub",
    description: "Fast charging wall adapter compatible with modern Samsung devices.",
    tags: ["samsung", "charger", "usb-c", "near me", "tech"],
    image: makeSvgDataUrl("Samsung Charger", "#5fd5ff", "#7138ff"),
    aiScore: 95,
    humanRating: 4.6,
    humanReviewCount: 205,
    badge: "Near You",
    delivery: "Ready for pickup in 30 minutes",
    giftWrap: false,
    pickup: true,
    storeDistance: "",
    category: "Tech",
    retailerUrl: "#",
    storeIds: ["techhub-sandton"],
  },
  {
    id: "5",
    title: "Rose Gold Smartwatch",
    price: "R1,899",
    store: "Nova Wear",
    description: "Lightweight health tracking watch with a premium metallic finish.",
    tags: ["watch", "gift", "pink", "tech", "wearables"],
    image: makeSvgDataUrl("Smartwatch", "#ff7eb6", "#56bfff"),
    aiScore: 87,
    humanRating: 4.5,
    humanReviewCount: 96,
    badge: "Premium Pick",
    delivery: "Free delivery in 1-2 days",
    giftWrap: true,
    pickup: true,
    storeDistance: "",
    category: "Wearables",
    retailerUrl: "#",
    storeIds: ["novawear-melrose"],
  },
  {
    id: "6",
    title: "Minimal Desk Lamp",
    price: "R599",
    store: "Nest Living",
    description: "Warm ambient light with touch dimming and a sculptural profile.",
    tags: ["home", "desk", "lamp", "gift"],
    image: makeSvgDataUrl("Desk Lamp", "#182d67", "#5fd5ff"),
    aiScore: 84,
    humanRating: 4.4,
    humanReviewCount: 73,
    badge: "Home Favorite",
    delivery: "Courier delivery available",
    giftWrap: true,
    pickup: false,
    storeDistance: "",
    category: "Home",
    retailerUrl: "#",
    storeIds: ["nestliving-fourways"],
  },
];

const toRadians = (value: number) => (value * Math.PI) / 180;

export const getDistanceKm = (origin: Coordinates, destination: Coordinates) => {
  const earthRadiusKm = 6371;
  const dLat = toRadians(destination.latitude - origin.latitude);
  const dLon = toRadians(destination.longitude - origin.longitude);
  const lat1 = toRadians(origin.latitude);
  const lat2 = toRadians(destination.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const formatDistance = (distanceKm: number) =>
  distanceKm < 1 ? `${Math.round(distanceKm * 1000)} m away` : `${distanceKm.toFixed(1)} km away`;

const getRelevantStoreIds = (products: Product[]) =>
  new Set(products.flatMap((product) => product.storeIds));

const rankProducts = (
  products: Product[],
  userLocation: Coordinates,
  stores: StoreLocation[]
) =>
  products
    .map((product) => {
      const nearestStore = product.storeIds
        .map((storeId) => stores.find((store) => store.id === storeId))
        .filter((store): store is StoreLocation => Boolean(store))
        .sort(
          (left, right) =>
            getDistanceKm(userLocation, left) - getDistanceKm(userLocation, right)
        )[0];

      const distanceKm = nearestStore ? getDistanceKm(userLocation, nearestStore) : 999;
      const localBoost = Math.max(0, 10 - distanceKm);

      return {
        ...product,
        aiScore: Math.min(99, Math.round(product.aiScore + localBoost)),
        delivery: nearestStore?.fulfillment ?? product.delivery,
        retailerUrl: nearestStore?.retailerUrl ?? product.retailerUrl,
        storeDistance: nearestStore ? formatDistance(distanceKm) : "Online delivery",
      };
    })
    .sort((left, right) => right.aiScore - left.aiScore);

export const buildSearchExperienceFromCatalog = (
  query: string,
  products: Product[],
  stores: StoreLocation[],
  location?: Coordinates
): SearchExperience => {
  const userLocation = location ?? defaultCoordinates;
  const rankedProducts = rankProducts(products, userLocation, stores);
  const topPick = rankedProducts[0];
  const relevantStoreIds = getRelevantStoreIds(rankedProducts);

  const nearbyStores = stores
    .filter((store) => relevantStoreIds.has(store.id))
    .map((store) => {
      const distanceKm = getDistanceKm(userLocation, store);

      return {
        ...store,
        distanceKm,
        distanceLabel: formatDistance(distanceKm),
      };
    })
    .sort((left, right) => left.distanceKm - right.distanceKm)
    .slice(0, 4);

  const serviceHighlights = [
    topPick?.giftWrap ? "Gift wrapping available" : "Gift wrapping at selected partners",
    "Doorstep delivery options",
    "Direct links to retailer pages",
    nearbyStores.length > 0 ? "Pickup from nearby stores" : "Virtual storefront delivery",
  ];

  const userAreaLabel =
    location && nearbyStores[0]
      ? `${nearbyStores[0].city} area`
      : "Johannesburg coverage zone";

  return {
    products: rankedProducts,
    topPick,
    nearbyStores,
    serviceHighlights,
    aiSummary: query
      ? `SHOPAI ranked these results for "${query}" using intent, price fit, delivery speed, and store availability near ${userAreaLabel}.`
      : `SHOPAI ranked these results using quality, convenience, and local availability across the ${userAreaLabel}.`,
    userAreaLabel,
  };
};

export const getProductsForQuery = (query: string, location?: Coordinates) => {
  const normalized = query.toLowerCase().trim();
  const userLocation = location ?? defaultCoordinates;

  const filteredProducts =
    !normalized
      ? baseProducts
      : baseProducts.filter((product) => {
          const haystack =
            `${product.title} ${product.store} ${product.description} ${product.tags.join(" ")}`.toLowerCase();

          return normalized
            .split(/\s+/)
            .every((term) => haystack.includes(term.replace(/[^\w-]/g, "")));
        });

  const fallback = baseProducts.filter((product) => {
    if (!normalized) return true;

    return (
      product.tags.some((tag) => normalized.includes(tag)) ||
      normalized.includes(product.category.toLowerCase()) ||
      normalized.includes(product.store.toLowerCase())
    );
  });

  const resultSet = filteredProducts.length > 0 ? filteredProducts : fallback;

  return rankProducts(resultSet.slice(0, 6), userLocation, storeCatalog);
};

export const getSearchExperience = (
  query: string,
  location?: Coordinates
): SearchExperience => {
  return buildSearchExperienceFromCatalog(
    query,
    getProductsForQuery(query, location),
    storeCatalog,
    location
  );
};
