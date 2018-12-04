import { CREATE_DISH, DELETE_DISH, UPDATE_DISH} from './dishConstant';
import { toastr } from 'react-redux-toastr';
import { createNewDish } from '../../app/common/util/helper';
import firebase from '../../app/config/firebase';
//import { asyncActionStart, asyncActionFinish,asyncActionError } from '../async/asyncActions';
export const createDish = (dish) => {
    return async (dispatch, getState, getFirestore) => {
        const firestore = getFirestore();
        //const user = firestore.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        let newDish = createNewDish(photoURL, dish)

        
        try{
            let createdDish = await firestore.add('dishes', newDish);
            toastr.success('Success!', 'People has been created')
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

export const addDishComment = (dishId , values) => 
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const profile = getState().firebase.profile;
        const user = firebase.auth().currentUser;
        let newComment = {
            displayName: profile.displayName,
            photoURL: profile.photoURL || '/assets/user.png',
            uid : user.uid,
            text : values.comment,
            date : Date.now()
        }
        try{
            await firebase.push(`dish_chat/${dishId}`, newComment)
        }
        catch(error){ 
            console.log(error);
            toastr.success('Oops','Problem adding comment')
        }
    }