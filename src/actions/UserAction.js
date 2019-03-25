import axios from 'axios';
import {API_BASE} from '../config/env';

const GET_USER='GET_USER'

export const userList=()=>{
    return dispatch=>{
        axios.get(`${API_BASE}/users`)
            .then(result=>result.data)
                .then(result=> dispatch({
                    type:GET_USER,
                    payload:{
                        allUsers:result
                    }
                }
            )
        )
    }
}