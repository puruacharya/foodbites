import { CREATE_PEOPLE, DELETE_PEOPLE, UPDATE_PEOPLE } from './peopleConstant';
export const createPeople = (people) => {
    return {
        type: CREATE_PEOPLE,
        payload: {
            people
        }
    };
};

export const updatePeople = (people) => {
    return {
        type: UPDATE_PEOPLE,
        payload: {
            people
        }
    };
};
export const deletePeople = (peopleId) => {
    return {
        type: DELETE_PEOPLE,
        payload: {
            peopleId
        }
    };
};