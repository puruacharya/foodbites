import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_DISH, UPDATE_DISH, DELETE_DISH } from './dishConstant';


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
  
export const createDish = (state, payload) => {
    return [...state, Object.assign({},payload.dish) ];
} ;


export const updateDish = (state, payload) => {
    return [
        ...state.filter(dish => dish.id !== payload.dish.id),
        Object.assign({}, payload.dish)
    ];
};


export const deleteDish = (state, payload) => {
    return [...state.filter(dish => dish.id !== payload.dishId)];
} ;



export default createReducer(initialState, {
    [CREATE_DISH]: createDish,
    [UPDATE_DISH]: updateDish,
    [DELETE_DISH]: deleteDish,

});