import React, { Component } from 'react'
import { connect } from 'react-redux'


export class UserComponent extends Component {

  render() {
    const {users}=this.props;
    return (
      <div>
        <ul className="list-group">
            {
               users.allUsers.map(user=>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {user.name}
                    <span className="badge badge-primary badge-pill">10</span>
               </li>
              ) 
            }
        </ul>
      </div>
    )
  }
}

export default connect(null,null)(UserComponent)
