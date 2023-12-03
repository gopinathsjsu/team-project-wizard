import { Showtime } from "./ShowTimeInterface";

export interface Screen {
  _id: string;
  screenType: string;
  seatingCapacity: number;
  screenName: string;
  rows: number;
  columns: number;
  cost: number;
  theatreId: string;
  seatArray: any[]; // Specify a more detailed type if available
  occupancyStatus: any[]; // Specify a more detailed type if available
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  showtimes: Showtime[];
}