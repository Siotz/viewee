import React, { Component } from 'react'
import s from '../scss/EditorTemplate.module.scss';

export default class EditorTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            html: ''
        }
    }

    handleChange(e) {
        console.log("onChange");
    }

    handleSave(e) {
        console.log(e.previousElementSibling);
        // this.setState({ html: e.target.value });
    }
    render() {
        return (
            <div>
                Editor Template
                <div className={s.content}
                    // html={this.state.html}
                    value={this.state.html}
                    contentEditable={true}
                    // name="editor"
                    // id="editor"
                    // suppressContentEditableWarning={true}
                    onChange={e => this.handleChange(e)}>
                    <p>Write your viewee.</p>
                </div>
                <button onClick={this.handleSave}>저장</button>
            </div>
        )
    }
}
