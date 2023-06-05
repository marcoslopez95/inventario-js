export declare interface ResponseCustom<T = any> {
  message: string;
  code: number;
  data?: T[];
  success: boolean;
}
