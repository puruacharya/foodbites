import { CREATE_DBOY, DELETE_DBOY, UPDATE_DBOY} from './dboyConstant';
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
import { toastr } from 'react-redux-toastr';
export const createDboy = (dboy) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_DBOY,
                payload: {
                    dboy
                }
        });
        toastr.success("Successfully added")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updateDboy = (dboy) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_DBOY,
                payload: {
                    dboy
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deleteDboy = (dboyId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_DBOY,
                payload: {
                    dboyId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

