import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CarDetails extends Component {
    render(){  

        if(!this.props.car) {
            return (<Link to="/"><h2>Go to Cars</h2></Link>);
        }
        return(
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header"><h1>Car Info</h1></div>
                    <div className="card-body">
                        <h5 className="card-title">ID: {this.props.car._id} </h5>
                        <h5 className="card-title">Year: {this.props.car.car_year} </h5>
                        <h5 className="card-title">Brand: {this.props.car.car_brand} </h5>
                        <h5 className="card-title">Price: {this.props.car.car_price} </h5>
                        <h5 className="card-title">About:{this.props.car.car_about} </h5>
                        <br></br>
                    <Link to="/"><h6>Choose another</h6></Link>
                    </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car : state.SelectedCar
    };
}

export default connect(
    mapStateToProps
) (CarDetails);