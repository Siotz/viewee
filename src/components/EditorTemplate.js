import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import s from '../scss/EditorTemplate.module.scss';

export default class EditorTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            edit: false
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
            editorContentHtml: stateToHTML(editorState.getCurrentContent())
        })
    }

    onSave = (e) => {
        // console.log(stateToHTML(this.state.editorState.getCurrentContent()));
        console.log(this.state.editorContentHtml);
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

    render() {
        return (
            <div>
                Editor Template
                <button onClick={this.onUnderlineClick}>U</button>
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onItalicClick}><em>I</em></button>
                <div className={s.content}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        readOnly={this.state.edit}
                    />
                </div>
                <div>
                    <pre>{this.state.editorContentHtml}</pre>
                </div>
                <button onClick={this.onSave}>저장</button>
            </div>
        )
    }
}
