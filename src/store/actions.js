const CHANGE_COMM_NAME_ACTION = 'CHANGE_COMM_NAME_ACTION';
const CHANGE_COMM_TEXT_ACTION = 'CHANGE_COMM_TEXT_ACTION';
const ADD_NEW_COMM_ACTION = 'ADD_NEW_COMM_ACTION';
const REMOVE_COMM_ACTION = 'REMOVE_COMM_ACTION';

export const changeCommentatorName = commName => {
    return {
        type: CHANGE_COMM_NAME_ACTION,
        payload: commName
    }
}

export const changeCommentText = commText => {
    return {
        type: CHANGE_COMM_TEXT_ACTION,
        payload: commText
    }
}

export const addComment = ev => {
    ev.preventDefault();
    ev.target.reset();
    return {
        type: ADD_NEW_COMM_ACTION,
    }
}

export const removeComm = commentId => {
    return {
        type: REMOVE_COMM_ACTION,
        payload: commentId
    }
}