export type Image = {
  src: string;
  alt: string;
};

export type Mixer = {
  id: number;
  name: string;
  description: string;
  price: number;
  style: string;
  mount: string;
  category: string;
  family: string;
  spoutShape?: string;
  features: string[];
  images: {
    src: string;
    alt: string;
  }[];
};

export const sortOptions = {
  DEFAULT: "default",
  PRICE_LOW: "price-low",
  PRICE_HIGH: "price-high",
  NAME_ASC: "name-asc",
} as const;

export const styleOptions = {
  ALL: "all",
  PULL_DOWN: "Pull-Down",
  TRADITIONAL: "Traditional",
  MODERN: "Modern",
} as const;

export const mountOptions = {
  ALL: "all",
  WALL: "Wall Mount",
  DECK: "Deck Mount",
} as const;