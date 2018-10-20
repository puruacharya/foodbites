import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_DISH, UPDATE_DISH, DELETE_DISH } from './dishConstant';


const initialState = [
    {
      id: '1',
      title: 'Paav Bhaaji',
      
      category: 'Indian',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
  
    },
    {
      id: '2',
      title: 'noodles',    
      category: 'Chineese',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      
    }
  ];
  
export const createEvent = (state, payload) => {
    return [...state, Object.assign({},payload.dish) ];
} ;


export const updateEvent = (state, payload) => {
    return [
        ...state.filter(dish => dish.id !== payload.dish.id),
        Object.assign({}, payload.dish)
    ];
};


export const deleteEvent = (state, payload) => {
    return [...state.filter(dish => dish.id !== payload.dish.id)];
} ;

export default createReducer(initialState,{
    [CREATE_DISH]: createDish,
    [UPDATE_DISH]: updateDish,
    [DELETE_DISH]: deleteDish
});