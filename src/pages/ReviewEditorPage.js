import React, { Component } from 'react'
import ReviewEditor from '../containers/ReviewEditor';

export default class ReviewEditorPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // true 면, /review/posting 내 글 수정하기
            // false 면, /review/posting 새글 쓰기
            modify: true
        }
    }

    render() {
        return (
            <ReviewEditor modify={this.state.modify} />
        )
    }
}
