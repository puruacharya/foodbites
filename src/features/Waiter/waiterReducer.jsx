import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_WAITER, UPDATE_WAITER, DELETE_WAITER } from './waiterConstant';
import { deleteWaiter } from './waiterAction';


const initialState = [
    {
      id: '1',
      title: 'Paav Bhaaji',
      
      category: 'Indian',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      price: '200',
      course: "Tower of London, St Katharine's & Wapping, London",
      quantity: '5',
      photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
  
    },
    {
      id: '2',
      title: 'noodles',    
      category: 'Chineese',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      price: 'London, UK',
      course: 'Punch & Judy, Henrietta Street, London, UK',
      quantity: '600',
      photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      
    }
  ];
  
export const createWaiter = (state, payload) => {
    return [...state, Object.assign({},payload.waiter) ];
} ;


export const updateWaiter = (state, payload) => {
    return [
        ...state.filter(waiter => waiter.id !== payload.waiter.id),
        Object.assign({}, payload.waiter)
    ];
};


export const deleteDboy = (state, payload) => {
    return [...state.filter(waiter => waiter.id !== payload.waiterId)];
} ;



export default createReducer(initialState, {
    [CREATE_WAITER]: createWaiter,
    [UPDATE_WAITER]: updateWaiter,
    [DELETE_WAITER]: deleteWaiter,

});