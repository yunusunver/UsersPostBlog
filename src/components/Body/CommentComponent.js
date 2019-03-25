import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CommentComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {comments}=this.props;
    return (
      <div>
        {
          comments.allComment.map(comment=>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{comment.name}</h5>
              <small>{comment.postId}</small>
            </div>
            <p class="mb-1">{comment.body}</p>
            <small>{comment.email}</small>
          </a>  
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent)
