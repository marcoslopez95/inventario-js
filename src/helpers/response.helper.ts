import { ResponseCustom } from './response.interface';

const responseDelete = (): ResponseCustom => ({
  message: 'Deleted Successfull',
  code: 200,
  success: true,
});

export { responseDelete };
