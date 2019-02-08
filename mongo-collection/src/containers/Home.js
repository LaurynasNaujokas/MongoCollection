import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { carSelected } from '../actions/CarSelectedAction';



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
      <nav aria-label="Page navigation example" style={{marginTop : 50, marginLeft : 400}}>
        <ul className="pagination">
            <li className="page-item"><a class="page-link" href="">Previous</a></li>
            <li className="page-item"><a class="page-link" href="">1</a></li>
            <li className="page-item"><a class="page-link" href="">2</a></li>
            <li className="page-item"><a class="page-link" href="">3</a></li>
            <li className="page-item"><a class="page-link" href="">Next</a></li>
        </ul>
    </nav>
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