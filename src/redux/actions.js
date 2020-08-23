//actions.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import { CALENDAR_DATA, } from "./actionTypes";

export function setCalenderData(data) {
  return {
    type: CALENDAR_DATA,
    data
  }
}
