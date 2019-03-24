const initialState={
    allUsers:[]
}

const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'GET_USER':
            state={
                allUsers:action.payload.allUsers
            }
        default:
            break;
    }
    return state;
}

export default UserReducer;