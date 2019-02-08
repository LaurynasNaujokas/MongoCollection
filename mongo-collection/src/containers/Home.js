import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { carSelected } from '../actions/CarSelectedAction';
import Pagination from '../components/Pagination';



class PostList extends Component {
renderList(){
  return this.props.cars.map((car) => {

    return ( 
    <Link className="list-group" to="/PostDetailsInfo">
      <li className="list-group-item" style={{marginTop: "10px"}}
      key={car.id}
      onClick={() => this.props.carSelected(car)}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Brand: {car.car_brand}</h5>
                <p className="card-text">About: {car.car_about}</p>
            </div>
        </div>
      </li>
    </Link>

    )
  });
}

render(){
  return(
    <ul>
      {this.renderList()}
      <Pagination />
    </ul>
    
  )
}
}
const mapStateToProps = state => {
  return {
    cars: state.cars
  };
}

function matchDispatchToProps(dispatch){

  return bindActionCreators({carSelected : carSelected}, dispatch);
}



export default connect(
  mapStateToProps,
  matchDispatchToProps

)(PostList);