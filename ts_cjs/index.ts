import { SolarDate, LunarDate } from "@nghiavuive/lunar_date_vi";

const al = new LunarDate({ day: 2, month: 5, year: 2023 });
al.init();
al.setDate({ day: 2, month: 10, year: 2023})

console.log(al.toSolarDate());

console.log("Hello")


