import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'src/helpers/model.interface';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService extends Model<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor() {
    super();
    this.table = 'Category Product';
  }
}
