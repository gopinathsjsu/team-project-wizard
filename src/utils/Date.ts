import { format, parseISO } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

function minutesToHours(n: number = 150) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
}

const formatDate = (dateString: string ="2022-03-24T00:00:00.000Z", showTime:boolean = false): string => {
    const date = parseISO(dateString); // Converts the string to a Date object
    return showTime?format(date,'d MMM yyyy HH:MM:SS'):format(date, 'd MMM, yyyy'); // Formats the date
};


const convertTo12HourFormat = (timestamp: string): string => {
    const time = new Date(timestamp);
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone:'America/Los_Angeles' });

};

const getUsTimeZone = (timestamp: string ) => {
    const date = timestamp ==="" ? new Date() : new Date(timestamp);
    const westCoastLocaleString = date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    console.log(westCoastLocaleString);
    return westCoastLocaleString;
}

const before6PM = (timestamp: string)=>{

    const showDate = timestamp ==="" ? new Date() : new Date(timestamp);
    // Convert to Pacific Time Zone
    showDate.setHours(showDate.getHours() - 7); // Adjusting UTC to Pacific Time (UTC-7)
    // Check if the time is before 6 PM
    return showDate.getHours() < 18;
}
export {minutesToHours, formatDate, convertTo12HourFormat, getUsTimeZone, before6PM};



    