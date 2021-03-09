import React from 'react';

const Comment = ({item, removeComm}) => {
    return (
        <li className="comment"> 
            <span className="comment_comment-text">{item.commText}</span>
            <span className="comment_commentator-name">Автор:{item.commName}</span>
            <div className="comment_comment-info">
                <span className="comment_date">{item.date}</span>
                <button 
                className="comment_remove-btn" 
                onClick={() => removeComm(item.id)}>X</button> 
            </div> 
        </li>
    )
}

export default Comment;