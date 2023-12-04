export interface NewUser {
  username: string;
  password: string;
  name: string;
  email: string;
  memberShipType: string;
}

export interface LoginUser{
  email: string,
  password: string
}