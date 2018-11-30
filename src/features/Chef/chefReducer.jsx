import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_CHEF, UPDATE_CHEF, DELETE_CHEF } from './chefConstant';


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
  
export const createChef = (state, payload) => {
    return [...state, Object.assign({},payload.chef) ];
} ;


export const updateChef = (state, payload) => {
    return [
        ...state.filter(chef => chef.id !== payload.chef.id),
        Object.assign({}, payload.chef)
    ];
};


export const deleteChef = (state, payload) => {
    return [...state.filter(chef => chef.id !== payload.chefId)];
} ;



export default createReducer(initialState, {
    [CREATE_CHEF]: createChef,
    [UPDATE_CHEF]: updateChef,
    [DELETE_CHEF]: deleteChef,

});
