//create a date
const today = new Date()
console.log(today)//new Date('2025-02-17T09:36:56.000Z')

console.log(new Date('2024-12-24'))//new Date('2024-12-24T00:00:00.000Z')
console.log(new Date(2037,10,24,23,55,5))//nvember is month 10 in js('2037-11-24T22:55:05.000Z')

//logs 3 days from today : 3 days * 24hrs * 60mins * 60 secs * 1000 to convert to miliseconds
console.log(new Date(0))//Jan 1('1970-01-01T00:00:00.000Z')
console.log(new Date(3 * 24 * 60 * 60 * 1000))//Jan 4('1970-01-04T00:00:00.000Z')

//working with dates
const future = new Date(2037,10,19,23,55)
console.log(future) //new Date('2037-11-24T22:55:00.000Z')
console.log(future.getFullYear()) //2037
console.log(future.getMonth()) //10
console.log(future.getDate()) //19
console.log(future.getDay()) //4 (Day of the week : Thu)
console.log(future.getHours()) //23
console.log(future.getMinutes()) //55
console.log(future.getSeconds()) //0
console.log(future.toISOString()) //'2037-11-19T22:55:00.000Z'

console.log(future.getTime())//timestamp 2142284100000
console.log(new Date(2142284100000))//new Date('2037-11-19T22:55:00.000Z')

//get current timestamp
console.log(Date.now())//1739787283157

//setFullYear()
future.setFullYear(2040)
console.log(future)//new Date('2040-11-19T22:55:00.000Z')

//calculate differences
const day1 = new Date(2024, 1, 14)
const day2 = new Date(2024, 1, 16)
//Math.abs() to avoid the case when day 1 is more than day 2 -> the result will be negative and it won't work
const calcDayPass = (day1, day2) => Math.abs(day2 - day1) / (1000 * 60 *60 * 24) //if there's hr + mins then add Math.round() to round up to one day instead of x.xx
console.log(calcDayPass(day1,day2))//2 days

//Display Date 
const now = new Date()
//mannually define locale with ISO Language Code Table -> 'en-US'2/18/2025, 'en-GB'2/18/2025
//new Intl.DateTimeFormat('en-US').format(now) //2/18/2025

//use options to display hours too
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //it can be numberic, 2-digit
  year: 'numeric',
  weekday: 'long'
}
//new Intl.DateTimeFormat('en-GB',options).format(now) //Tuesday 18 February 2025 at 11:01 AM

//getting user's locale
const locale = navigator.language//en-US
console.log(new Intl.DateTimeFormat(locale,options).format(now))  //Tuesday, February 18, 2025 at 11:01 AM
