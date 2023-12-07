import { Showtime } from "./ShowTimeInterface";

export interface Screen {
  _id: string;
  screenType: string;
  screenName: string;
  rows: number;
  col: number;
  cost: number;
  theatreId: string;
  occupancyStatus: any[]; // Specify a more detailed type if available
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  showtimes: Showtime[];
}