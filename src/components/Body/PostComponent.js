import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class PostComponent extends Component {
  render() {
    const {posts,getComment} =this.props;
    return (
      <div>
            {
               posts.allPost.map(post=>
                <Link to={`/comments`} onClick={getComment.bind(this,post.id)} activeClassName="list-group-item list-group-item-action flex-column align-items-start active">                
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{post.title}</h5>
                    <small>{post.userId}</small>
                  </div>
                  <p className="mb-1">{post.body}</p>
                  <small>{post.id}</small>
                </Link>
              ) 
            }
      </div>
      
    )
  }
}



export default connect(null, null)(PostComponent)
