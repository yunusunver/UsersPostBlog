const initialState={
    allPost:[]
}

const PostReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'GET_POST':
            state={
                allPost:action.payload.allPost
            };
        default:
            break;
    }
    return state;
}

export default PostReducer;