import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';
import { CustomersService } from './services/customers/customers.service';
import { CustomersController } from './controllers/customers/customers.controller';

@Module({
  controllers: [ControllersController, CustomersController],
  providers: [ServicesService, CustomersService]
})
export class UsersModule {}
