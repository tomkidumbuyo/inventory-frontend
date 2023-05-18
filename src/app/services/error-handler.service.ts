import { Injectable } from '@angular/core';
import { ErrorCodes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  errorMessages: {
    [key in ErrorCodes]?: string;
  } = {};
  defaultErrorMessage = "Error executing command";

  setErrorMessages(errorMessages: { [key in ErrorCodes]?: string }) {
    this.errorMessages = errorMessages
  }

  getErrorMessage(error: any) {
    if(Array.isArray(error?.error?.message)) return error.error.message.join(", ");
    if(error?.error?.message in this.errorMessages) return this.errorMessages[error?.error?.message as ErrorCodes];
    return error?.error?.message && typeof error?.error?.message === 'string' ? error?.error?.message : this.defaultErrorMessage;
  }

}
