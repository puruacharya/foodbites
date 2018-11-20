import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_DELIVERYBOY, UPDATE_DELIVERYBOY, DELETE_DELIVERYBOY } from './deliveryboyConstant';
//import { deleteDeliveryboy, updateDeliveryboy } from './deliveryboyAction';


const initialState = [
    {
      id: '1',
      fname: 'Raj',
      lname: 'Singh',
      nationality: 'Indian',
      dob: '1996-05-20',
      city: 'Indore', 
      address: 'I/147 l.i.g. colony',
      uname: 'puru',
      pass: '12345',
      photoURL: '../../../public/assets/user.png'
  
    }
];
export const createDeliveryboy = (state, payload) => {
    return [...state, Object.assign({},payload.dboy) ];
} ;


export const updateDeliveryboy = (state, payload) => {
    return [
        ...state.filter(dboy => dboy.id !== payload.dboy.id),
        Object.assign({}, payload.dboy)
    ];
};


export const deleteDeliveryboy = (state, payload) => {
    return [...state.filter(dboy => dboy.id !== payload.dboyId)];
} ;

export default createReducer(initialState, {
    [CREATE_DELIVERYBOY]: createDeliveryboy,
    [UPDATE_DELIVERYBOY]: updateDeliveryboy,
    [DELETE_DELIVERYBOY]: deleteDeliveryboy
});