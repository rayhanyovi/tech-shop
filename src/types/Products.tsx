interface Product {
  id: number;
  brand: string;
  model: string;
  screen_size: string | null;
  color: string | null;
  harddisk: string | null;
  cpu: string | null;
  ram: string | null;
  os: string | null;
  special_features: string | null;
  graphics: string | null;
  graphics_coprocessor: string | null;
  cpu_speed: string | null;
  rating: string;
  price: string;
}

interface CardProductProps {
  id: number;
  product: Product[];
}
