import axios from 'axios';
import {API_BASE} from '../config/env';
const GET_COMMENT="GET_COMMENT";

export const commentList=(postId)=>{
  if (postId) {
    return dispatch=>{
        axios.get(`${API_BASE}/comments?postId=${postId}`)
            .then(result=>result.data)
                .then(result=>dispatch({
                    type:GET_COMMENT,
                    payload:{
                        allComment:result
                    }
                }))
    }
  }else{
    return dispatch=>{
        axios.get(`${API_BASE}/comments`)
            .then(result=>result.data)
                .then(result=>dispatch({
                    type:GET_COMMENT,
                    payload:{
                        allComment:result
                    }
                }))
    }
  }
}