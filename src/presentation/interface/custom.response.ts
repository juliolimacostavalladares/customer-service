
export interface ICustomResponse<Data> {
  success: boolean,
  message: 'Success' | unknown,
  data?: Data
}