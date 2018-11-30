import { CREATE_WAITER, DELETE_WAITER, UPDATE_WAITER} from './waiterConstant';
import { toastr } from 'react-redux-toastr'
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
export const createWaiter = (waiter) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_WAITER,
                payload: {
                    waiter
                }
        });
        toastr.success("Successfully addeed")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updateWaiter = (waiter) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_WAITER,
                payload: {
                    waiter
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deleteWaiter = (waiterId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_WAITER,
                payload: {
                    waiterId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

