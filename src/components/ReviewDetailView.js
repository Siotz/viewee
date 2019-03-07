import React, { Component } from 'react'
import { Editor } from 'draft-js';
import s from "../scss/ReviewDetailView.module.scss";
import classNames from 'classnames';
import { getDate } from '../modules/moduleFunc';

export default class ReviewDetailView extends Component {
    // Set default props
    static defaultProps = {
        title: "",
        date: getDate(),
        tags: [],
        thumbnail: "",
        modify: false
    }

    render() {
        const {
            id, dramaId, title, date, tags, thumbnail,
            editorState, read,
            onChange, onSave, onUnderlineClick, onBoldClick, onItalicClick
        } = this.props;
        return (
            <div className={s.wrap}>
                <div>
                    <img src={thumbnail} alt="" className={s.thumbnail} />
                    {/* To do : onChange로 상태 받아서 수정 가능하게 하기 */}
                    <h3 className={s.reviewTitle} contentEditable={!read} suppressContentEditableWarning={true}>
                        제목 : {title}
                    </h3>
                    <div className={s.tags}>
                        {
                            tags.map(t =>
                                <span key={t} className={s.tags__item}>{t}</span>
                            )
                        }
                    </div>
                    <span className={s.date}>날짜 : {date}</span>
                    {
                        // To do : userId에 따라서 내 글이면 수정하기 버튼으로 변경하기
                        read ? <button>추천하기</button> : null
                    }
                    {
                        // 읽기 전용 아닐 때만 텍스트 편집기띄우기
                        // To do : 이 부분 function component로 빼기
                        read ? null : (
                            <div className={s.textEditor}>
                                <button onClick={onUnderlineClick} className={classNames(s.textEditor__item, s.u)}>U</button>
                                <button onClick={onBoldClick} className={classNames(s.textEditor__item, s.b)}>B</button>
                                <button onClick={onItalicClick} className={classNames(s.textEditor__item, s.i)}>I</button>
                            </div>
                        )
                    }
                    <div className={s.content}>
                        <Editor
                            // handleKeyCommand={this.handleKeyCommand.bind(this)}
                            editorState={editorState}
                            onChange={onChange}
                            readOnly={read}
                        />
                    </div>
                    {/* <div>
                        <pre>{this.renderContentAsRawJs()}</pre>
                    </div> */}
                    {
                        // 읽기 전용일 땐 저장 버튼 안보이게 하기
                        read ? null : (
                            <button onClick={onSave}>저장</button>
                        )
                    }
                </div>
            </div>
        )
    }
}
