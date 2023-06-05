import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Model } from 'src/helpers/model.interface';

@Injectable()
export class BrandService extends Model<
  Brand,
  CreateBrandDto,
  UpdateBrandDto
> {}
