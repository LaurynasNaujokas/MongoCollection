import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarForm extends Component {
  render() {
    return (
        <div>
             <h3 style={{ marginBottom: 10 }}>Add New Car: </h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Car Brand:</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.car_brand}
                        onChange={this.onChangeCarBrand}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Year: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_year}
                        onChange={this.onChangeCarYear}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Color: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_color}
                        onChange={this.onChangeCarColor}
                        />
                  </div>
                  <div className="form-group">
                      <label>About car: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_about}
                        onChange={this.onChangeCarAbout}
                        />
                  </div>
                    
                  <div className="form-group">
                      <input type="submit" value="Add New Car" className="btn btn-primary"/>
                  </div>
              </form>
        </div>
    );
  }
}

export default CarForm;