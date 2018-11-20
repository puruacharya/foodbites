import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
import  dishReducer  from '../../features/Dishes/dishReducer';
import peopleReducer from '../../features/People/peopleReducer';
import modalReducer from '../../features/modals/modalReducer';
import {reducer as FormReducer} from 'redux-form';

import  chefReducer  from '../../features/Chef/chefReducer';
import  dboyReducer  from '../../features/Deliveryboy/deliveryboyReducer';
import  authReducer  from '../../features/auth/authReducer';
import  asyncReducer  from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
    test: testReducer,
    dish: dishReducer,
    people:peopleReducer,
    form : FormReducer,
    chef: chefReducer,
    dboy: dboyReducer,
    modals : modalReducer,
    auth: authReducer,
    async: asyncReducer
});

export default rootReducer;