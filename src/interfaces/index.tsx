export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  size: string;
  rating: {
    rate: number;
    count: number;
  };
}
