import { CAR_SELECTED } from './ActionTypes';


export const carSelected = (car) => {
    console.log("Clicked on", car.id);
    return {
        type: CAR_SELECTED,
        payload: car
    };
};