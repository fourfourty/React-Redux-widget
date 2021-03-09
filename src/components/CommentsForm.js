import React from 'react';

const CommentsForm = ({changeCommentatorName, changeCommentText, addComment}) => {
    return (
        <form className="comments-form" onSubmit={addComment}>
            <input 
                className="comments-form_comment-text"
                type="text" 
                placeholder="Комментарий"
                onChange={ev => changeCommentText(ev.target.value)} />
                <input 
                className="comments-form_commentator-name"
                type="text" 
                placeholder="Имя"
                onChange={ev => changeCommentatorName(ev.target.value)} />
            <input 
                className="comments-form_sumbit-btn"
                type="submit" 
                value="Добавить"/>
        </form>
    )
}

export default CommentsForm;