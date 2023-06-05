import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { responseDelete } from 'src/helpers/response.helper';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const newProduct: Product = {
      id: this.counterId,
      ...createProductDto,
    };
    this.counterId++;
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`Product ${id} not exists`);
    }
    return this.products.find((product) => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`Product ${id} not exists`);
    }
    const product: Product = this.findOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...product,
      ...updateProductDto,
    };
    return this.products[index];
  }

  remove(id: number) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`Product ${id} not exists`);
    }
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return responseDelete();
  }

  private itemExists(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    return index !== -1;
  }
}
