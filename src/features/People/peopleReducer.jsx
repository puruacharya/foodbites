import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_PEOPLE, UPDATE_PEOPLE, DELETE_PEOPLE } from './peopleConstant';


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
  
export const createPeople= (state, payload) => {
    return [...state, Object.assign({},payload.people) ];
} ;


export const updatePeople = (state, payload) => {
    return [
        ...state.filter(people => people.id !== payload.people.id),
        Object.assign({}, payload.people)
    ];
};


export const deletePeople = (state, payload) => {
    return [...state.filter(people => people.id !== payload.peopleId)];
} ;

export default createReducer(initialState, {
    [CREATE_PEOPLE]: createPeople,
    [UPDATE_PEOPLE]: updatePeople,
    [DELETE_PEOPLE]: deletePeople
});