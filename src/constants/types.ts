export interface IUser {
  id: number;
  name?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  country?: string;
  picture?: unknown | File;
  email?: string;
  password?: string;
  confirmPassword?: string;
  accept?: boolean;
}

export interface IForm extends IUser {
  picture?: File;
}

export interface ISubmitForm extends IUser {
  picture: string;
}

export type FormFieldsTypes =
  | 'name'
  | 'age'
  | 'gender'
  | 'country'
  | 'picture'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'accept';