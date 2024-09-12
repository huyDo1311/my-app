import { combineReducers } from "redux";
// import GioHangReducer from "./GioHangReducer";
import GameXucXacReducer from "./XucXacReducer";
import OanTuXiReducer from "./OanTuXiReducer";
import ToDoListReducer from "./ToDoListReducer";



const rootReducer = combineReducers({
     // GioHangReducer,
     // GameXucXacReducer,
     // OanTuXiReducer
     ToDoListReducer
})

export default rootReducer;