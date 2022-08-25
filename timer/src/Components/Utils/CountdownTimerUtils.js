import dayjs from 'dayjs';


export function getRemainingTimeUnitlMsTimestamp(TimestampMs) {
  const timetampDayjs = dayjs(TimestampMs);
  const nowDayjs =dayjs();
//   if(timetampDayjs.isBefore(nowDayjs)){
//     return {
//         seconds:'00',
//         minutes: '00',
//         hours: '00',
//         days: '00'
//     }
    
//   }


    return {
        seconds : getRemainingSeconds(nowDayjs, timetampDayjs),
        minutes :  getRemainingMinutes(nowDayjs, timetampDayjs),
        hours :  getRemainingHours(nowDayjs, timetampDayjs),
        days :  getRemainingDays(nowDayjs, timetampDayjs),
    };
}

function getRemainingSeconds(nowDayjs, timetampDayjs){
    const seconds = timetampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}


function getRemainingMinutes(nowDayjs, timetampDayjs){
    const minutes = timetampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}


function getRemainingHours(nowDayjs, timetampDayjs){
    const hours = timetampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}


function getRemainingDays(nowDayjs, timetampDayjs){
       const days = timetampDayjs.diff(nowDayjs, 'days')
       return padWithZeros(days, 2);
} 


function padWithZeros(number, MinLength){
    const numberString = number.toString();
    if(numberString.length  >= MinLength) return numberString;
    return "0" .repeat(MinLength - numberString.length) + numberString;
}
