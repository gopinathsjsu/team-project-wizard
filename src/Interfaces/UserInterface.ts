export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: 'M' | 'F';  // Assuming gender can be 'M' (Male) or 'F' (Female)
  mobile: string;
  genres: string[];  // Assuming genres is an array of strings
  favouriteArtists: string[];  // Assuming favouriteArtists is an array of strings
  role: string;
  memberShipType: string;
  rewardPoints: number;
  email: string;
  password: string;  // Note: Storing passwords on the client-side is generally unsafe
  isActive: boolean;
  createdAt: string;  // ISO date string format
  updatedAt: string;  // ISO date string format
  __v: number;
}