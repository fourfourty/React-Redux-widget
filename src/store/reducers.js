import getEditDate from '../components/comments-date';

const initialState = {
    commText: '',
    commName: '',
    comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [],
}

const newComment = state => {
    return {
        id: Math.round(Math.random() * 1000),
        key: Math.round(Math.random() * 1000),
        commName: state.commName,
        commText: state.commText,
        date: getEditDate(),
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COMM_NAME_ACTION':
            return {
                ...state, 
                commName: action.payload
            }
        case 'CHANGE_COMM_TEXT_ACTION':
            return {
                ...state, 
                commText: action.payload
            }
        case 'ADD_NEW_COMM_ACTION':
            return {
                ...state, 
                comments: [
                    ...state.comments,
                    newComment(state),
                ]
            }
        case 'REMOVE_COMM_ACTION':
            return {
                ...state, 
                comments: state.comments.filter(item => {
                    return item.id !== action.payload ? item : null
                })
            }
        default:
            return state;
    }
}