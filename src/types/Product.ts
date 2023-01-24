export type Product = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  oldPrice?: number;
  rating: number;
  categoryId: number;
};
