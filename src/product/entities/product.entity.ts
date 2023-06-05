import { Brand } from '../relations/brand/entities/brand.entity';
import { Category } from '../relations/categories/entities/category.entity';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: Category;
  brand: Brand;
}
