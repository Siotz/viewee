import React, { Component } from 'react'
import ReviewEditor from '../containers/ReviewEditor';

export default class ReviewEditorPage extends Component {
    render() {
        return (
            <ReviewEditor modify={this.props.modify} />
        )
    }
}
