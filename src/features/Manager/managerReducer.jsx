import { createReducer } from '../../app/common/util/reducerUtil';

import { CREATE_MANAGER, UPDATE_MANAGER, DELETE_MANAGER } from './managerConstant';



const initialState = [
    {
        id: '1',
        photoURL: 'data:image/jpeg;base64,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',
        fname: 'Sagar',
        lname: 'Jain',
        pname: 'Kunal',
        mname: 'Rekha',
        gender: 'Male',
        DOB: '12/22/1980',
        address: 'Nanda Nagar',
        city: 'Indore',
        state: 'Madhya Pradesh',
        country: 'India',
        nationality: 'Indian',
        mstatus: 'Married',
        likes: 40,

        likeschef: {

        },
        likesdboy: {

        },
        likeswaiter: {

        },
        uname: 'priya',
        pass: '12345'

    },
    {
        id: '2',
        fname: 'Swati',
        lname: 'Jain',
        pname: 'Anil',
        mname: 'Alka',
        gender: 'Female',
        DOB: '1975/10/02',
        address: 'Anand Nagar',
        city: 'Indore',
        state: 'Madhya Pradesh',
        country: 'India',
        nationality: 'Indian',
        mstatus: 'Married',
        likes: 22,
        likeschef: {

        },
        likesdboy: {

        },
        likeswaiter: {

        },
        uname: 'swai',
        pass: '12345'

    }
];

export const createManager = (state, payload) => {
    return [...state, Object.assign({}, payload.manager)];
};


export const updateManager = (state, payload) => {
    return [
        ...state.filter(manager => manager.id !== payload.manager.id),
        Object.assign({}, payload.manager)
    ];
};


export const deleteManager = (state, payload) => {
    return [...state.filter(manager => manager.id !== payload.managerId)];
};

export default createReducer(initialState, {
    [CREATE_MANAGER]: createManager,
    [UPDATE_MANAGER]: updateManager,
    [DELETE_MANAGER]: deleteManager
});