export interface ResponseType {
  success: boolean;
  message: string;
  data: any;
}

export interface AuthResponseType extends ResponseType {
  data: {
    appToken: string;
  };
}
