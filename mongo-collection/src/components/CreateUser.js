import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {
    constructor(props) {
        super(props); 

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonMovie = this.onChangePersonMovie.bind(this);
        this.onChangePersonAge = this.onChangePersonAge.bind(this);
        this.onChangePersonGender = this.onChangePersonGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name : '',
            person_movie : '',
            person_age : '',
            person_gender : ''
        }
    }

    onChangePersonName(e) {
        this.setState({
            person_name : e.target.value
        });
    }

    onChangePersonMovie(e) {
        this.setState({
            person_movie : e.target.value
        });
    }

    onChangePersonAge(e) {
        this.setState({
            person_age : e.target.value
        });
    }

    onChangePersonGender(e) {
        this.setState({
            person_gender : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
          person_name: this.state.person_name,
          
        };
        axios.post('http://localhost:4000/celebrity/add', obj)
            .then(res => console.log(res.data));
        
        this.setState({
          person_name: ''
        })
      }

    render() {
        return (
            <div >
              <h3 style={{ marginBottom: 10 }}>Add New Celebirty: </h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Movie: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.person_movie}
                        onChange={this.onChangePersonMovie}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person age: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.person_age}
                        onChange={this.onChangePersonAge}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person gender: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.person_gender}
                        onChange={this.onChangePersonGender}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Celebrity" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        )
    }
}