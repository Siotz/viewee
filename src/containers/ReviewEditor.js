import React, { Component } from 'react'
import ReviewDetailView from '../components/ReviewDetailView';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import api from '../api';

export default class ReviewEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            read: false,
            onChange: this.onChange.bind(this),
            onSave: this.onSave.bind(this),
            onUnderlineClick: this.onUnderlineClick.bind(this),
            onBoldClick: this.onBoldClick.bind(this),
            onItalicClick: this.onItalicClick.bind(this),
        }
    }

    async componentDidMount() {
        if (this.props.modify) {
            const rawEditorData = await this.getSavedEditorData();
            if (rawEditorData !== null) {
                const contentState = convertFromRaw(rawEditorData);
                this.setState({
                    editorState: EditorState.createWithContent(contentState)
                });
            }
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

    onChange = (editorState) => {
        this.setState({ editorState });
    }

    async onSave() {
        const { editorState } = this.state;
        // Convert to raw js object
        const raw = convertToRaw(editorState.getCurrentContent());
        const body = JSON.stringify(raw);
        await api.post('reviews',
            {
                dramaId: 1,
                userId: 2,
                title: "뷰이뷰이",
                date: "2018-01-01",
                content: body,
                tags: ["뷰", "이"],
                thumbnail: "asdf"
            }
        );
        console.log("Your Review posted!")
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }


    // handleKeyCommand(command) {
    //     const { editorState } = this.state;
    //     const newState = RichUtils.handleKeyCommand(editorState, command);
    //     if (newState) {
    //         this.onChange(newState);
    //         return true;
    //     }
    //     return false;
    // }

    // renderContentAsRawJs() {
    //     const contentState = this.state.editorState.getCurrentContent();
    //     const raw = convertToRaw(contentState);
    //     return JSON.stringify(raw, null, 2);
    // }

    render() {
        return (
            <div>
                <ReviewDetailView {...this.state} />
            </div>
        )
    }
}
