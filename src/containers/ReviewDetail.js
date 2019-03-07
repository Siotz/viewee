import React, { Component } from 'react'
import ReviewDetailView from '../components/ReviewDetailView';
import Profile from '../containers/Profile';
import { EditorState, convertFromRaw } from 'draft-js';
import api from "../api";

export default class ReviewDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editorState: EditorState.createEmpty(),
            read: true,
            id: null,
            dramaId: null,
            userId: null,
            title: "",
            date: "",
            tags: [],
            thumbnail: "",
        }
    }

    // To do : componentDidMount 와 getSavedEditorData 중복 해결
    async componentDidMount() {
        const rawEditorData = await this.getSavedEditorData();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            this.setState({
                editorState: EditorState.createWithContent(contentState)
            });
        }
    }

    async getSavedEditorData() {
        const { data: { id, dramaId, userId, title, date, content, tags, thumbnail } } = await api.get('reviews/3');
        this.setState({
            id,
            dramaId,
            userId,
            title,
            date,
            tags,
            thumbnail
        })
        return content ? JSON.parse(content) : null;
    }

    render() {
        const { userId } = this.state;
        return (
            <div>
                <ReviewDetailView {...this.state} />
                {/* userId가 state로 늦게 들어가는 현상으로 인해 key를 userId로 줌 */}
                <Profile key={userId} userId={userId} />
            </div>
        )
    }
}
