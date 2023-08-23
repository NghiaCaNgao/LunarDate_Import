const _calendar = require("@nghiavuive/lunar_date_vi")

var solar_date = new _calendar.SolarDate(new Date());
var lunar_date = solar_date.toLunarDate();

console.log(lunar_date.getMonthName());