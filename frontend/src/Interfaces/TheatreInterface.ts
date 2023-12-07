import {Screen} from "./ScreenInterface"

export interface Theatre {
  _id: string;
  theatreName: string;
  description: string;
  location: string;
  state: string;
  address: string;
  zip: number;
  contact: number;
  city: string;
  theatreUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  screens: Screen[];
}
  