export interface Ticket {
    _id: string;
    userId: string;
    movieId: string;
    screenId: string;
    transactionId: string;
    showTime: string;
    showTimeId: string;
    seats: string; // This is a JSON string, you might want to parse it into a more structured type.
    numberOfSeats: number;
    qrUrls: string[]; // Assuming this is an array of strings (URLs)
    bookingDate: string;
    totalCost: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
