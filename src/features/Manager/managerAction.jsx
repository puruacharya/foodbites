import { CREATE_MANAGER, DELETE_MANAGER, UPDATE_MANAGER } from './managerConstant';
import { toastr } from 'react-redux-toastr'
export const createManager = (manager) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_MANAGER,
                payload: {
                    manager
                }
        });
        toastr.success("Successfully added")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updateManager = (manager) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_MANAGER,
                payload: {
                    manager
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deleteManager = (managerId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_MANAGER,
                payload: {
                    managerId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};