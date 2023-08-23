import { LunarDate } from "@nghiavuive/lunar_date_vi";

const lunar_date = new LunarDate({ day: 2, month: 5, year: 2023 });
lunar_date.init();
console.log(lunar_date.toSolarDate());

// SolarDate {
//     day: 19,
//     month: 6,
//     year: 2023,
//     name: 'solar_calendar',
//     jd: 2460115,
//     leap_year: false
// }