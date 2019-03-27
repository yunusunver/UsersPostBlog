import axios from 'axios';
import {API_BASE} from '../config/env';

const GET_POST='GET_POST';

export const postList=(userId)=>{
    if (userId) {
        return dispatch => {
            axios.get(`${API_BASE}/posts?userId=${userId}`)
                .then(result=>result.data)
                    .then(result=>dispatch({
                        type:GET_POST,
                        payload:{
                            allPost:result
                        }
                    }
                ))
        }
    }else{
        return dispatch=>{
            axios.get(`${API_BASE}/posts`)
                .then(result=>result.data)
                    .then(result=>dispatch({
                        type:GET_POST,
                        payload:{
                            allPost:result
                        }
                    }
                ))
    
        }
    }
}

export const postSearch=(search)=>{
    return dispatch => {
        axios.get(`${API_BASE}/posts?title=${search}`)
            .then(result=>result.data)
                .then(result=>dispatch({
                    type:GET_POST,
                    payload:{
                        allPost:result
                    }
                }
            ))
    }
}