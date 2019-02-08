
import React, { Component } from 'react';
import axios from 'axios';
import CarForm from '../components/CarForm';


export default class CreateCar extends Component {
    constructor(props) {
        super(props); 

        this.onChangeCarBrand = this.onChangeCarBrand.bind(this);
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onChangeCarColor = this.onChangeCarColor.bind(this);
        this.onChangeCarAbout = this.onChangeCarAbout.bind(this);
        this.onChangeCarPrice = this.onChangeCarPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            car_name : '',
            car_year : '',
            car_color : '',
            car_about : '',
            car_price : ''
        };
    }
    
    onChangeCarBrand(e) {
        this.setState({
            car_brand : e.target.value
        });
    }

    onChangeCarYear(e) {
        this.setState({
            car_year : e.target.value
        });
    }

    onChangeCarColor(e) {
        this.setState({
            car_color : e.target.value
        });
    }

    onChangeCarAbout(e) {
        this.setState({
            car_about : e.target.value
        });
    }

    onChangeCarPrice(e) {
        this.setState({
            car_price : e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            car_brand: this.state.car_brand,
            car_year: this.state.car_year,
            car_color: this.state.car_color,
            car_about: this.state.car_about,
            car_price: this.state.car_price
            
        };
        axios.post('http://localhost:5000/car/add', obj)
        .then(res => console.log(res.data))
        .catch((err) => {
            console.log("Something went wrong", err);
        }) ;
        
        this.props.history.push('/');

        this.setState({
          car_brand: '',
          car_year: '',
          colo_color: '',
          car_about: '',
          car_price: ''
        });
      }

    render() {
        return (
            <div >
              <div>
             <h3 style={{ marginBottom: 10 }}>Add New Car: </h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Car Brand:</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.props.car_brand}
                        onChange={this.onChangeCarBrand}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Year: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.car_year}
                        onChange={this.onChangeCarYear}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Color: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.car_color}
                        onChange={this.onChangeCarColor}
                        />
                  </div>
                  <div className="form-group">
                      <label>About car: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.car_about}
                        onChange={this.onChangeCarAbout}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car price: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.car_price}
                        onChange={this.onChangeCarPrice}
                        />
                  </div> 
                  <div className="form-group">
                      <input type="submit" value="Add New Car" className="btn btn-primary"/>
                  </div>
              </form>
                </div>
            </div>
        )
    }
}