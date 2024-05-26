
interface Product {
    discount: ReactNode;
    originalPrice: any;
    reviewsCount: ReactNode;
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  }
  
  interface SidebarProps {
    onCategoryChange: (category: string) => void;
  }

  interface CategoriesProps{
    slug:string;
    name:string;
    url:string
  }

  // Define TypeScript interfaces for products
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  brand: string;
  category: string;
  rating: number;
  stock: number;
}

interface ProductDetailsProps {
  allProducts: Product[];
  product: Product;
}