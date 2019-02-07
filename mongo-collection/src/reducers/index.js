import { combineReducers } from 'redux';
import cars from './CarsReducer'; 
import selectedCar from './CarSelectedReducer';

const allReducers = combineReducers({
    cars : cars,
    SelectedCar : selectedCar
});

export default allReducers;