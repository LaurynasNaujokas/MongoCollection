import { FETCH_CARS } from '../actions/ActionTypes';

export default function carsReducer(state=[], action) {
    switch(action.type) {
        case FETCH_CARS:
            return action.cars;
        default:
            return state;
    }
};