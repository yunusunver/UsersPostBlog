import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PostComponent extends Component {
  render() {
    const {posts} =this.props;
    return (
      <div>
            <ul className="list-group">
            {
               posts.allPost.map(post=>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {post.title}
                    <span className="badge badge-primary badge-pill">14</span>
               </li>
              ) 
            }
        </ul>
      </div>
    )
  }
}



export default connect(null, null)(PostComponent)
