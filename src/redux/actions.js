//actions.js
import { CALENDAR_DATA, } from "./actionTypes";

export function setCalenderData(data) {
  return {
    type: CALENDAR_DATA,
    data
  }
}
