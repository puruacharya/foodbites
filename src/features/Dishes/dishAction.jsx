import { CREATE_DISH, DELETE_DISH, UPDATE_DISH} from './dishConstant';
import { toastr } from 'react-redux-toastr';
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
export const createDish = (dish) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_DISH,
                payload: {
                    dish
                }
        });
        toastr.success("Successfully added")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updateDish = (dish) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_DISH,
                payload: {
                    dish
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deleteDish = (dishId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_DISH,
                payload: {
                    dishId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

