create table if not exists stores (
  id text primary key,
  name text not null,
  category text not null,
  city text not null,
  latitude double precision not null,
  longitude double precision not null,
  services text[] default '{}'::text[],
  fulfillment text not null,
  retailer_url text not null
);

create table if not exists products (
  id text primary key,
  title text not null,
  price text not null,
  store text not null,
  description text not null,
  tags text[] default '{}'::text[],
  image text not null,
  ai_score integer not null default 80,
  human_rating numeric(3,2) not null default 4.5,
  human_review_count integer not null default 0,
  badge text not null,
  delivery text not null,
  gift_wrap boolean not null default false,
  pickup boolean not null default false,
  category text not null,
  retailer_url text not null,
  store_ids text[] default '{}'::text[]
);
