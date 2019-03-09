import React, { Component } from "react";
import ReviewDetailView from "../components/ReviewDetailView";
import Profile from "../containers/Profile";
import { EditorState, convertFromRaw } from "draft-js";
import api from "../api";
import { connect } from "react-redux";
import { changeContent } from "../store/ducks/editorState";

class ReviewDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            read: true,
            id: null,
            dramaId: null,
            userId: null,
            title: "",
            date: "",
            tags: [],
            thumbnail: ""
        };
    }

    async componentDidMount() {
        const rawEditorData = await this.getSavedEditorData();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            this.props.changeContent(EditorState.createWithContent(contentState));
        }
    }

    async getSavedEditorData() {
        const { reviewId } = this.props;
        const {
            data: { id, dramaId, userId, title, date, content, tags, thumbnail }
        } = await api.get(`reviews/${reviewId}`);
        this.setState({
            id,
            dramaId,
            userId,
            title,
            date,
            tags,
            thumbnail
        });
        return content ? JSON.parse(content) : null;
    }

    render() {
        const { userId } = this.state;
        return (
            <div>
                <ReviewDetailView key={this.props.editorState} {...this.state} />
                {/* userId가 state로 늦게 들어가는 현상으로 인해 key를 userId로 줌 */}
                <Profile key={userId} userId={userId} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editorState: state.editorState.editorState
});

const mapDispatchToProps = {
    changeContent
};
// const mapDispatchToProps = ({
//     changeContent: () => dispatch(changeContent)
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewDetail);
