import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { BrandModule } from './relations/brand/brand.module';
import { CategoriesModule } from './relations/categories/categories.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [BrandModule, CategoriesModule],
})
export class ProductModule {}
