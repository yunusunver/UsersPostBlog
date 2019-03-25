import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PostComponent extends Component {
  render() {
    const {posts,getComment} =this.props;
    return (
      <div>
            {
               posts.allPost.map(post=>
                <a href="#" onClick={getComment.bind(this,post.id)} class="list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{post.title}</h5>
                  <small>{post.userId}</small>
                </div>
                <p class="mb-1">{post.body}</p>
                <small>{post.id}</small>
              </a>
              ) 
            }

      </div>
      
    )
  }
}



export default connect(null, null)(PostComponent)
