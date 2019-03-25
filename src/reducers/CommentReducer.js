const initialState={
    allComment:[]
}

const CommentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'GET_COMMENT':
            state={
                allComment:action.payload.allComment
            }
        default:
            break;
    }
    return state;
}

export default CommentReducer;