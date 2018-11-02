import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
import  dishReducer  from '../../features/Dishes/dishReducer';
import peopleReducer from '../../features/People/peopleReducer';

const rootReducer = combineReducers({
    test: testReducer,
    dish: dishReducer,
    people:peopleReducer
});

export default rootReducer;