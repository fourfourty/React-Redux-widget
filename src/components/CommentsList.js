import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments, removeComm}) => {
    const commentsList = comments.map(comm => {
        return <Comment key={comm.key} item={comm} removeComm={removeComm}/>
    })
    return (
        <ul>
            {
                [...commentsList]
            }
        </ul>
    )
}

export default CommentsList;