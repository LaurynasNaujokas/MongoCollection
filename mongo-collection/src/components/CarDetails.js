import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CarDetails extends Component {
    render(){  

        return(
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header"><h1>Car Info</h1></div>
                    <div className="card-body">
                        <h5 className="card-title">ID: {this.props.car.car_brand} </h5>
                        <h5 className="card-title">Year: {this.props.car} </h5>
                        <h5 className="card-title">Brand: </h5>
                        <h5 className="card-title">Price: </h5>
                        <h5 className="card-title">About: </h5>
                        <br></br>
                    <Link to="/"><h6>Choose another</h6></Link>
                    </div>
            </div>
        );
    }
}

export default CarDetails;