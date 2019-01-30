import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.person_movie}
          </td>
          <td>
            {this.props.obj.person_age}
          </td>
          <td>
            {this.props.obj.person_gender}
          </td>
        </tr>
    );
  }
}

export default TableRow;