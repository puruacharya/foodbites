import { createReducer} from '../../app/common/util/reducerUtil';

import { CREATE_DBOY, UPDATE_DBOY, DELETE_DBOY } from './dboyConstant';


const initialState = [
    {
        //id: '1',
        photoURL:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhIVFRUVFRUVFRUVFRUVFRcVFhUWFhcVFRUYHSggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGisfIB0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAABAwEGAwUFBgUFAQAAAAAB',
        fname :'Sourav',
        lname : 'Khanna',
        pname : 'Abhishek',
        mname : 'Mansi',
        gender : 'Male',
        DOB : '02/21/1977',
        salary:'25000',
        address : 'LIG',
        city : 'Indore',
        state : 'Madhya Pradesh',
        country : 'India',
        nationality : 'Indian',
        mstatus : 'Married',
        likes:1,
        free:true,
        delivery_comp: [
            {
                order_id: '1',
                rate : ''
              },
              {
                order_id: '2',
                rate : ''
              },
            
          ],
        delivery_active : {
            id : 101
        },
        peoplelikes:{
            id : '2',
        },
        uname : 'sourav',
        pass : '12345', 

      }
    
  ];
  
export const createDboy = (state, payload) => {
    return [...state, Object.assign({},payload.dboy) ];
} ;


export const updateDboy = (state, payload) => {
    return [
        ...state.filter(dboy => dboy.id !== payload.dboy.id),
        Object.assign({}, payload.dboy)
    ];
};


export const deleteDboy = (state, payload) => {
    return [...state.filter(dboy => dboy.id !== payload.dboyId)];
} ;



export default createReducer(initialState, {
    [CREATE_DBOY]: createDboy,
    [UPDATE_DBOY]: updateDboy,
    [DELETE_DBOY]: deleteDboy,

});