import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarCard extends Component {
  render() {
    return (
        <div className="card" >
            <img className="card-img-top" src="https://www.deerpassgolf.com/wp-content/uploads/2018/12/volkswagen-golf-vw-golf-4.jpg"
             alt="" style={{width : 200, height: 150, marginTop : 10}} />
                <div className="card-body">
                    <h5 className="card-title">Brand: {this.props.obj.car_brand}</h5>
                    <p className="card-text">Year: {this.props.obj.car_year}</p>
                    <p className="card-text">Color: {this.props.obj.car_color}</p>
                    <p className="card-text">About: {this.props.obj.car_about}</p>
                    <a href="www.google.lt" className="btn btn-primary">More Details</a>
                </div>
        </div>
    );
  }
}

export default CarCard;