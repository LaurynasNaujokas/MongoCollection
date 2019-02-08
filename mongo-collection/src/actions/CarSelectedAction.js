import { CAR_SELECTED } from './ActionTypes';

export const carSelected = (car) => {
    return {
        type: CAR_SELECTED,
        payload: car
    };
};