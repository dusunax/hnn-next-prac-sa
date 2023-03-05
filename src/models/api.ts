export interface ResponseType {
  success: boolean;
  message: string;
  data: any;
}

export interface AuthResponseType {
  appToken: string;
}

export interface ErrorType {
  error: string;
  message: string;
  statusCode: number;
}
