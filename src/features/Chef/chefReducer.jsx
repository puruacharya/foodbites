import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_CHEF, UPDATE_CHEF, DELETE_CHEF } from './chefConstant';


const initialState = [
    {
      id: '1',
      fname: 'Raju',
      lname: 'Jain',
      dob: '1989-06-15',
      address: 'Indore',
      city: 'Indore',
      uname: 'RajJain',
      pass: '12345'

    },
    {
        id: '2',
        fname: 'Rekha',
        lname: 'Shrivastav',
        dob: '1989-03-12',
        address: 'Indore',
        city: 'Indore',
        uname: 'RekhaShrivastav',
        pass: '12345'
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
    [DELETE_CHEF]: deleteChef
});