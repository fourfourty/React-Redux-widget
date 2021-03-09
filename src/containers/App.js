import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCommentatorName,changeCommentText, addComment, removeComm } from '../store/actions';

import CommentsForm from '../components/CommentsForm';
import CommentsList from '../components/CommentsList';

class App extends React.Component {
    componentDidUpdate() {
        const { comments } = this.props;
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    render() {
        const {
            comments, 
            changeCommentText, 
            changeCommentatorName,
            addComment, 
            removeComm
        } = this.props;
        return (
            <div className="wrap">
                <CommentsForm 
                    changeCommentatorName={changeCommentatorName}
                    changeCommentText={changeCommentText} 
                    addComment={addComment}/>
                <CommentsList 
                    removeComm={removeComm} 
                    comments={comments}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = dispatch => {
    return {
        changeCommentText: bindActionCreators(changeCommentText, dispatch),
        changeCommentatorName: bindActionCreators(changeCommentatorName, dispatch),
        addComment: bindActionCreators(addComment, dispatch),
        removeComm: bindActionCreators(removeComm, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
    )(App);