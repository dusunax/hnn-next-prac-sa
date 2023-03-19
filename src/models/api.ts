import { Dispatch, SetStateAction } from "react";

export interface ResponseType {
  success: boolean;
  message: string;
  data: any;
}

export interface ErrorType {
  error: string;
  message: string;
  statusCode: number;
}

export interface RetrunType {
  error: string | Error | undefined;
  isLoading: boolean;
}
