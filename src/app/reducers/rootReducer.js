import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
import  dishReducer  from '../../features/Dishes/dishReducer';

const rootReducer = combineReducers({
    test: testReducer,
    dish: dishReducer
});

export default rootReducer;