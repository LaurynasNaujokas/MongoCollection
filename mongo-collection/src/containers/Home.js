import React, { Component } from 'react';
import axios from 'axios';
import CarCard from '../components/CarCard';



export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            car : []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/car')
        .then(response => {
            this.setState({car: response.data});
        })
        .catch(function (err) {
            console.log("Something went wrong", err);
        });
    }

    carDetails() {
            return this.state.car.map(function(object, i){
            return <CarCard obj={object} key={i} />;
        });
    }


    render() {
        console.log(this.props);
        return (
                <div>
                    <h2 align="center">Cars</h2>
                    <div>
                        { this.carDetails() }
                   
                    </div>
                </div>
        )
    }
}