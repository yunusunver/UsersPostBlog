import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import BodyComponent from './components/Body/BodyComponent';
import FooterComponent from './components/Footer/FooterComponent';
import {postSearch} from './actions/PostAction';
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      postSearch:''
    }
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.postSearch !== this.state.postSearch) {
      this.props.postSearch(this.state.postSearch)
    }
  }

  onSearchPost(postSearch){
    this.setState({
      postSearch:postSearch
    })
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent onSearchPost={this.onSearchPost.bind(this)}/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    posts:state.PostReducer
  }
}

const mapDispatchToProps={
  postSearch
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
