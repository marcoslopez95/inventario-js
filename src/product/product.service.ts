import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'src/helpers/model.interface';
import { CategoriesService } from './relations/categories/categories.service';
import { BrandService } from './relations/brand/brand.service';

@Injectable()
export class ProductService extends Model<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(
    private categoriesService: CategoriesService,
    private brandService: BrandService,
  ) {
    super();
    this.table = 'Product';
  }
  create(createProductDto: CreateProductDto) {
    this.categoriesService.findOne(createProductDto.category_id);
    this.brandService.findOne(createProductDto.brand_id);
    return super.create(createProductDto);
  }

  findAll() {
    this.items = this.items.map((item) => {
      return {
        ...item,
        brand: this.brandService.findOne(item.brand_id),
        category: this.categoriesService.findOne(item.category_id),
      };
    });
    return super.findAll();
  }

  findOne(id: number) {
    if (!this.itemExists(id)) {
      super.findOne(id);
    }
    const index = this.items.findIndex((item) => item.id === id);
    const item = this.items.find((item) => item.id === id);
    this.items[index] = {
      ...item,
      brand: this.brandService.findOne(item.brand_id),
      category: this.categoriesService.findOne(item.category_id),
    };
    return super.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    if (!this.itemExists(id)) {
      super.findOne(id);
    }
    this.categoriesService.findOne(updateProductDto.category_id);
    this.brandService.findOne(updateProductDto.brand_id);
    return super.update(id, updateProductDto);
  }
}
