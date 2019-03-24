import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
    UserReducer,
    PostReducer,
    CommentReducer
})