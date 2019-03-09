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
            editorState: EditorState.createEmpty(),
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
        // console.log(this.props.editorState);
        const rawEditorData = await this.getSavedEditorData();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            //   this.setState({
            //     editorState: EditorState.createWithContent(contentState)
            //   });
            this.props.changeContent(EditorState.createWithContent(contentState));
        }
        // console.log(this.props.editorState);
    }

    async getSavedEditorData() {
<<<<<<< HEAD
        const { reviewId } = this.props;
        const {
            data: { id, dramaId, userId, title, date, content, tags, thumbnail }
        } = await api.get(`reviews/${reviewId}`);
=======
        const { data: { id, dramaId, userId, title, date, content, tags, thumbnail } } = await api.get('reviews/3');
>>>>>>> 742cd56a7e6fc307f60f7059510ab5f43b7eddac
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
                <ReviewDetailView {...this.state} {...this.props} />
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