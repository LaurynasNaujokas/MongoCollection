import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            celebrity : []
        
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/celebrity')
        .then(response => {
            this.setState({celebrity: response.data});
        })
        .catch(function (err) {
            console.log("Something went wrong", err);
        });
    }

    tabRow() {
        return this.state.celebrity.map(function(object, i ){
            return <TableRow obj={object} key={i} />;
        });
    }


    render() {
        return (
            <div>
              <h3 align="center">Celebrity List</h3>
                <table className="table table-striped" style={{marginTop : 20}}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Movie</th>
                        <th>Age</th>
                        <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}