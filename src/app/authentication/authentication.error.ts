import { ErrorCodes } from "../types";

export const ErrorMessages: { [key in ErrorCodes]?: string } = {
  [ErrorCodes.USER_DOES_NOT_EXIST]: 'The user with this username does not exist',
  [ErrorCodes.USERNAME_AND_PASSWORD_DO_NOT_MATCH]: 'Username and password do not match'
}

