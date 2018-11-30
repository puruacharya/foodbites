import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
import  dishReducer  from '../../features/Dishes/dishReducer';
import peopleReducer from '../../features/People/peopleReducer';
import modalReducer from '../../features/modals/modalReducer';
import {reducer as FormReducer} from 'redux-form';
import {  reducer as toastrReducer} from 'react-redux-toastr';
import  chefReducer  from '../../features/Chef/chefReducer';
import  dboyReducer  from '../../features/Deliveryboy/dboyReducer';
import  authReducer  from '../../features/auth/authReducer';
import  asyncReducer  from '../../features/async/asyncReducer';
import managerReducer from '../../features/Manager/managerReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
const rootReducer = combineReducers({
    test: testReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    dish: dishReducer,
    people:peopleReducer,
    form : FormReducer,
    chef: chefReducer,
    dboy: dboyReducer,
    manager: managerReducer,
    modals : modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr : toastrReducer
});

export default rootReducer;