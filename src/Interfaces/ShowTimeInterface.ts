export interface Showtime {
    _id: string;
    movieId: string;
    screenId: string;
    startTime: string;
    endTime: string;
    price: number;
    discountPrice: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    screenName?:  string;
    screenType?: string;
}
