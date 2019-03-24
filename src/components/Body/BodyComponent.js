import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserComponent from './UserComponent';
import PostComponent from './PostComponent';
import CommentComponent from './CommentComponent';
import {Route} from 'react-router-dom';
import {userList} from '../../actions/UserAction';
import {postList} from '../../actions/PostAction';

export class BodyComponent extends Component {

  componentDidMount=()=>{
    this.props.userList();
    this.props.postList();
  }
  render() {
    const {users,posts}=this.props;
    return (
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-4">
                <UserComponent users={users}/>
            </div>
            <div className="col-md-8">
                <Route path='/posts' render={() => <PostComponent posts={posts}/>} />
                <Route path="/comments" component={CommentComponent}/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users:state.UserReducer,
    posts:state.PostReducer
  }
}

const mapDispatchToProps = {
  userList,
  postList
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent)
