import { CREATE_DISH, DELETE_DISH, UPDATE_DISH } from './dishConstant';
export const createDish = (dish) => {
    return {
        type: CREATE_DISH,
        payload: {
            dish
        }
    };
};

export const updateDish = (dish) => {
    return {
        type: UPDATE_DISH,
        payload: {
            dish
        }
    };
};
export const deleteDish = (dishId) => {
    return {
        type: DELETE_DISH,
        payload: {
            dishId
        }
    };
};