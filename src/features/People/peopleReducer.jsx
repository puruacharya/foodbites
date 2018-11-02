import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_PEOPLE, UPDATE_PEOPLE, DELETE_PEOPLE } from './peopleConstant';


const initialState = [
    {
      id: '1',
      fname: 'Raj',
      lname: 'Singh',
      Nationality: 'Indian',
      dob: '1996-05-20',
      city: 'Indore', 
      address: 'I/147 l.i.g. colony',
      uname: 'puru',
      pass: '12345'
  
    }
];
export const createPeople = (state, payload) => {
    return [...state, Object.assign({},payload.people) ];
} ;


export const updatePeople = (state, payload) => {
    return [
        ...state.filter(people => people.id !== payload.people.id),
        Object.assign({}, payload.people)
    ];
};


export const deletePeople = (state, payload) => {
    return [...state.filter(people => people.id !== payload.PeopleId)];
} ;

export default createReducer(initialState, {
    [CREATE_PEOPLE]: createPeople,
    [UPDATE_PEOPLE]: updatePeople,
    [DELETE_PEOPLE]: deletePeople
});