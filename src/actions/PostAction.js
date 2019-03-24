import axios from 'axios';

const GET_POST='GET_POST';

export const postList=()=>{
    return dispatch=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
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