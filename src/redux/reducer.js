//reducer.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import { CALENDAR_DATA, } from "./actionTypes";
const initialState = {
    loginData: [],
}
export default reducer = (state = initialState, action) => {
    const { data } = action
    switch (action.type) {
        case CALENDAR_DATA:
            return {
                ...state,
                getcalendarData: action.data
            }
    }
    return state

}