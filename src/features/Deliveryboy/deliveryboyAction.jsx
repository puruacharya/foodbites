import { CREATE_DELIVERYBOY, DELETE_DELIVERYBOY, UPDATE_DELIVERYBOY } from './deliveryboyConstant';
export const createDeliveryboy = (dboy) => {
    return {
        type: CREATE_DELIVERYBOY,
        payload: {
            dboy
        }
    };
};

export const updateDeliveryboy = (dboy) => {
    return {
        type: UPDATE_DELIVERYBOY,
        payload: {
            dboy
        }
    };
};
export const deleteDeliveryboy = (dboyId) => {
    return {
        type: DELETE_DELIVERYBOY,
        payload: {
            dboyId
        }
    };
};