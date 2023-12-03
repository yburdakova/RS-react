export interface IUser{
  id?: number;
  name?: string;
  age?: number;
  gender?: string;
  country?: string;
  picture?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  accept?: boolean;
}


export interface IForm {
  name?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  country?: string;
  picture?: unknown | File;
  email?: string;
  password?: string;
  confirmPassword?: string;
  accept?: boolean;
  id?: number;
}
export interface IUncontrollableForm extends IForm {
  picture?: File;
}

export interface IControllableForm extends IForm {
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