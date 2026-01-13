// data/products.ts
export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    description: "A modern solution for your business needs.",
    image: "/images/product1.png",
    available: true,
  },
  {
    id: 2,
    name: "Product B",
    description: "Optimize your workflow with this tool.",
    image: "/images/product2.png",
    available: false,
  },
  {
    id: 3,
    name: "Product C",
    description: "Boost productivity instantly.",
    image: "/images/product3.png",
    available: true,
  },
];
