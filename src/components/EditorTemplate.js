import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import api from '../api';
import s from '../scss/EditorTemplate.module.scss';

export default class EditorTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            edit: false
        }
    }

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
        const { data: { content } } = await api.get('reviews/3');
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

    renderContentAsRawJs() {
        const contentState = this.state.editorState.getCurrentContent();
        const raw = convertToRaw(contentState);
        return JSON.stringify(raw, null, 2);
    }

    render() {
        return (
            <div>
                Editor Template
                <button onClick={this.onUnderlineClick}>U</button>
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onItalicClick}><em>I</em></button>
                <div className={s.content}>
                    <Editor
                        // handleKeyCommand={this.handleKeyCommand.bind(this)}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        readOnly={this.state.edit}
                    />
                </div>
                {/* <div>
                    <pre>{this.renderContentAsRawJs()}</pre>
                </div> */}
                <button onClick={this.onSave.bind(this)}>저장</button>
            </div>
        )
    }
}
