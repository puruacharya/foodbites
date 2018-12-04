import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_DISH, UPDATE_DISH, DELETE_DISH } from './dishConstant';


const initialState = [
    {
        
        title: 'Paav Bhaaji',
        quant: '5',
        cost: '400',
        seasonal: 'Winter',
        
          
          
        category: 'Indian',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        nooflikes : '15',
        photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    
      },
      {
        
        title: 'Noodles',
        quant: '10',
        cost: '400',
        seasonal: 'all',
          
          
        category: 'Chineese',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        nooflikes : '13',
        photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    
      },
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