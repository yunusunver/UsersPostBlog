import axios from 'axios';

const GET_USER='GET_USER'

export const userList=()=>{

    return dispatch=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
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