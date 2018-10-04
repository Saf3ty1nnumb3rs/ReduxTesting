import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        // TODO - Call an action creator
        //Ands save the comment
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
            
        );
    }
}
//connect take pass action creators as props down to the component
export default connect( null, actions )(requireAuth(CommentBox));