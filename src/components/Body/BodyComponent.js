import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserComponent from './UserComponent';
import PostComponent from './PostComponent';
import CommentComponent from './CommentComponent';
import {Route} from 'react-router-dom';
import {userList} from '../../actions/UserAction';
import {postList} from '../../actions/PostAction';
import {commentList} from '../../actions/CommentAction';

export class BodyComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      userNo : "",
      postNo:""
    }
  }

  componentDidMount() {
    this.props.userList();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userNo !== this.state.userNo) {
      this.props.postList(this.state.userNo)
      this.props.commentList(this.state.postNo);
    }
  }

  getPost(userId){
    if (userId) {
      this.setState({ "userNo": userId })
      console.log("Hey :",this.state)
    }
  }

  getComment(postId){
    if (postId) {
      this.setState({"postNo":postId})
      console.log("Hey :",this.state)
    }
  }

  render() {
    const {users,posts,comments}=this.props;

    return (
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-4">
                <UserComponent users={users} getPost={this.getPost.bind(this)}/>
            </div>
            <div className="col-md-8">
                <Route path='/posts' render={() => <PostComponent posts={posts}  getComment={this.getComment.bind(this)} />} />
                <Route path="/comments" render={()=><CommentComponent comments={comments}/>}/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users:state.UserReducer,
    posts:state.PostReducer,
    comments:state.CommentReducer
  }
}

const mapDispatchToProps = {
  userList,
  postList,
  commentList
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent)
