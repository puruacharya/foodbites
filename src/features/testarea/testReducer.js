import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_ACTION_STARTED,COUNTER_ACTION_FINISHED } from "./testConstant";
import { createReducer } from '../../app/common/util/reducerUtil'
import { startCounterAction, finishCounterAction } from "./testAction";

const initialState = {
    data:45
}

export const incrementCounter = (state,payload) => {
    return { ...state, data:state.data + 1 };
} 

export const decrementCounter = (state,payload) => {
    return { ...state, data:state.data - 1 };
} 

export const counterActionStarted = (state, payload) => {
    return {
        ...state, loading : true
    }
}
export const counterActionFinished = (state, payload) => {
    return {
        ...state, loading : false
    }
}


// const testReducer = (state = initialState, action) => {
//     switch(action.type){
//         case INCREMENT_COUNTER: 
//         return { ...state, data:state.data + 1 };
//         case DECREMENT_COUNTER: 
//         return { ...state, data:state.data - 1};
//         default :
//             return state;
//     }
// };

export default createReducer(initialState,{
    [INCREMENT_COUNTER] : incrementCounter,
    [DECREMENT_COUNTER] : decrementCounter,
    [COUNTER_ACTION_STARTED] : startCounterAction,
    [COUNTER_ACTION_FINISHED] : finishCounterAction
})