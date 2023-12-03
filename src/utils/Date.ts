import { format, parseISO } from 'date-fns';


function minutesToHours(n: number = 150) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
}

const formatDate = (dateString: string ="2022-03-24T00:00:00.000Z"): string => {
    const date = parseISO(dateString); // Converts the string to a Date object
    return format(date, 'd MMM, yyyy'); // Formats the date
};

const convertTo12HourFormat = (timestamp: string): string => {
    const time = new Date(timestamp);
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' });

};

export {minutesToHours, formatDate, convertTo12HourFormat};



    