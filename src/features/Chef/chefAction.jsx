import { CREATE_CHEF, DELETE_CHEF, UPDATE_CHEF} from './chefConstant';
import { toastr } from 'react-redux-toastr'
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
export const createChef = (chef) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_CHEF,
                payload: {
                    chef
                }
        });
        toastr.success("Successfully added")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updateChef = (chef) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_CHEF,
                payload: {
                    chef
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deleteChef = (chefId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_CHEF,
                payload: {
                    chefId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

