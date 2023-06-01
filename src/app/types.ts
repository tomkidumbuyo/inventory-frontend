export enum ErrorCodes {
  USER_DOES_NOT_EXIST = 'USER_DOES_NOT_EXIST',
  USERNAME_AND_PASSWORD_DO_NOT_MATCH = 'USERNAME_AND_PASSWORD_DO_NOT_MATCH'
}

export interface UserInterface{
	id:  string;
	email:  string;
	firstName:  string;
	lastName:  string;
	phoneNumber:  string;
	userType:  string;
	createdAt:  Date;
	updatedAt:  Date;
}




export enum MainMenuEnum {
  SUMMARY = 'SUMMARY',
  STORES = 'STORES',
  MOVEMENT = 'MOVEMENT',
  EQUIPMENT = 'EQUIPMENT',
  TEAM = 'TEAM',
  SETTING = "SETTING",
  USER = "USER"
}
