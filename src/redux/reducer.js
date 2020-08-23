//reducer.js
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