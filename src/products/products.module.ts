import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  controllers: [CategoriesController, ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
