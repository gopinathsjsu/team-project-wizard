// Seat interface
interface Seat {
    col: string;
    isAvailable: boolean;
    isSelected: boolean;
  }
  
  // Row type
type Row = Seat[];
  
  // Seats type
export type Seats = { [key: string]: Row };