import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { BrandModule } from './relations/brand/brand.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [BrandModule],
})
export class ProductModule {}
