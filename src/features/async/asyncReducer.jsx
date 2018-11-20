import { createReducer } from '../../app/common/util/reducerUtil';
import { ASYNC_ACTION_START,ASYNC_ACTION_FINISH,ASYNC_ACTION_ERROR } from './asyncConstants';
//import { asyncActionError } from './asyncActions';

const initialState = {
    loading : false
}

export const asyncActionStart = (state) => {
    return { ...state , loading: true}
}

export const asyncActionFinish = (state) => {
    return { ...state , loading: false}
}
export const asyncActionError = (state) => {
    return { ...state , loading: true}
}

export default createReducer(initialState,{
    [ASYNC_ACTION_START]: asyncActionStart,
    [ASYNC_ACTION_FINISH] : asyncActionFinish,
    [ASYNC_ACTION_ERROR] : asyncActionError
})