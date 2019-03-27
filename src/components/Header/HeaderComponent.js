import React ,{Component}from 'react';
import {Link} from 'react-router-dom'


class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }

    inputChanged(event){
        this.setState({
            search:event.target.value
        })
    }

    searchPost(){
        this.props.onSearchPost(this.state.search);
        console.log(this.state.search)
    }

    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/comments">Comments</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
    
                    <input className="form-control mr-sm-2" 
                           type="text" 
                           placeholder="Search"
                           value={this.state.search}
                           onChange={this.inputChanged.bind(this)}
                           />
    
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit" >
                        <Link to={`/posts`} onClick={this.searchPost.bind(this)}>Search</Link>
                    </button>
                    </form>
                </div>
            </nav>
            </div>
        );
    }
};

export default HeaderComponent;
