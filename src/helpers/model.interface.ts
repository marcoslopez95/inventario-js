import { NotFoundException } from '@nestjs/common';
import { responseDelete } from './response.helper';

export class Model<T extends ModelInterface, CreateDto, UpdateDto> {
  items: (T & CreateDto)[] = [];
  counterId = 1;
  table = 'element';
  itemExists(id: number): boolean {
    const index = this.items.findIndex((item: T) => item.id === id);
    return index !== -1;
  }

  create(itemDto: CreateDto) {
    const item = {
      id: this.counterId,
      ...itemDto,
    } as T & CreateDto;
    this.counterId++;
    this.items.push(item);
    return item;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`This ${this.table} does not exist`);
    }
    const item = this.items.find((el) => el.id === id);
    return item;
  }

  update(id: number, updateDto: UpdateDto) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`This Element does not exist`);
    }
    const item = this.findOne(id) as T & CreateDto;
    const index = this.items.findIndex((el) => el.id === id);
    this.items[index] = {
      ...item,
      ...updateDto,
    };
    return this.items[index];
  }

  remove(id: number) {
    if (!this.itemExists(id)) {
      throw new NotFoundException(`This Element does not exist`);
    }
    const index = this.items.findIndex((product) => product.id === id);
    this.items.splice(index, 1);
    return responseDelete();
  }
}

export declare interface ModelInterface {
  id: number;
}
