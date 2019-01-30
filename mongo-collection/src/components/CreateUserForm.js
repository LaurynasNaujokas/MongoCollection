import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateUserForm extends Component {
  render() {
    return (
        <div>
            <h3 style={{ marginBottom: 10 }}>Add New Celebirty: </h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.props.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Movie: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.person_movie}
                        onChange={this.onChangePersonMovie}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person age: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.person_age}
                        onChange={this.onChangePersonAge}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person gender: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.props.person_gender}
                        onChange={this.onChangePersonGender}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Celebrity" className="btn btn-primary"/>
                  </div>
              </form>
        </div>
    );
  }
}

export default CreateUserForm;