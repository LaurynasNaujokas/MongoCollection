import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarDetails extends Component {
    render(){  
        return(
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header">Car Info</div>
                    <div className="card-body">
                        <h5 className="card-title">ID:  </h5>
                        <h5 className="card-title">Year: </h5>
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