import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



export class UserComponent extends Component {
  constructor(props){
    super(props);
  }
  

  render() {
    const {users, getPost}=this.props;

    return (
      <div>
        <ul className="list-group">
            {
               users.allUsers.map(user=>
                <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/posts`} onClick={getPost.bind(this, user.id)} activeClassName="list-group-item list-group-item-action flex-column align-items-start active">{user.name}</Link>
                    <span className="badge badge-primary badge-pill">{user.id}</span>
               </li>
              )
            }
        </ul>
      </div>
    )
  }
}

export default connect(null,null)(UserComponent)
