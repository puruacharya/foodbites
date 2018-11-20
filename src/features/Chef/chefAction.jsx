import { CREATE_CHEF, DELETE_CHEF, UPDATE_CHEF } from './chefConstant';
export const createChef = (chef) => {
    return {
        type: CREATE_CHEF,
        payload: {
            chef
        }
    };
};

export const updateChef = (chef) => {
    return {
        type: UPDATE_CHEF,
        payload: {
            chef
        }
    };
};
export const deleteChef = (chefId) => {
    return {
        type: DELETE_CHEF,
        payload: {
            chefId
        }
    };
};