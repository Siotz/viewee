import React, { Component } from 'react'
import s from "../scss/ReviewDetailView.module.scss";

export default class ReviewDetailView extends Component {
    render() {
        const {
            id,
            dramaId,
            title,
            date,
            content,
            tags,
            thumbnail
        } = this.props;
        return (
            <div className={s.wrap}>
                <img src={thumbnail} alt="" className={s.thumbnail} />
                <h3>{title}</h3>
                <span>{date}</span>
                {
                    content.map(item => (
                        <p key={item}>{item}</p>
                    ))
                }
            </div>
        )
    }
}
