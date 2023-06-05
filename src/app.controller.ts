import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.initApi();
  }

  @Get('api')
  initApi(): { message: string } {
    return {
      message: 'Hello World!',
    };
  }
}
