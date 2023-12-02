export interface Movie {
    _id: string; // Assuming id is a string type
    movieId?: string;
    title: string;
    posterUrl: string;
  
    screenId?: string[];
    cast?: string[];
    crew?: string[];
    description?: string;
    format?: string;
    genres: string[];
    languages?: string[];
    runTime?: number;
    rating?: number;
    movieTrailerUrl?: string;
    releaseDate?: string;
    ticketPrice?: number;
    ticketsSold?: number;
    certificate?: string;
    popularity?: number;
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }
  