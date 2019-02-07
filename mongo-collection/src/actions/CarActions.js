import axios from 'axios';
import { FETCH_CARS } from './ActionTypes';

const apiUrl = 'http://localhost:5000/car';

export const fetchCar = (cars) => {
    return {
        type: FETCH_CARS,
        cars
    };
};

export const fetchAllCars = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(response => {
            dispatch(fetchCar(response.data));
        })
        .catch(error => {
            throw(error);
        });
    };
};

