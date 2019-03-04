import React, { Component } from 'react'
import ReviewDetailView from '../components/ReviewDetailView';
import Profile from '../containers/Profile';
import api from "../api";

export default class ReviewDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            dramaId: null,
            userId: null,
            title: "",
            date: "",
            content: [],
            tags: [],
            thumbnail: ""
        }
    }

    async componentDidMount() {
        const { data: { id, dramaId, userId, title, date, content, tags, thumbnail } } = await api.get("reviews/2");
        this.setState({
            id,
            dramaId,
            userId,
            title,
            date,
            content,
            tags,
            thumbnail
        })
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
