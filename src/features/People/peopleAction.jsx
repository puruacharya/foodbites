import { CREATE_PEOPLE, DELETE_PEOPLE, UPDATE_PEOPLE, FETCH_PEOPLE} from './peopleConstant';
import { toastr } from 'react-redux-toastr';
import { asyncActionStart,asyncActionFinish,asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockAPI'
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
export const fetchPeople = (peoples) => {
    return {
        type: FETCH_PEOPLE,
        payload: peoples
    }
}


export const createPeople = (people) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_PEOPLE,
                payload: {
                    people
                }
        });
        toastr.success("Successfully added")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};

export const updatePeople = (people) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_PEOPLE,
                payload: {
                    people
                }
        });
        toastr.success("Successfully updated")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};
export const deletePeople = (peopleId) => {
    return async dispatch => {
        try{
            dispatch({
                type: DELETE_PEOPLE,
                payload: {
                    peopleId
                }
        });
        toastr.success("Successfully deleted")
    }
    catch (error){
            toastr.error("Something went wrong")    
        }
    }
};


export const loadPeople = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            let peoples = await fetchSampleData();
            dispatch(fetchPeople(peoples))
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    }
}

