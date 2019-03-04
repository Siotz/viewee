import React, { Component } from 'react'
import s from "../scss/ProfileView.module.scss";

export default class ProfileView extends Component {
    render() {
        const { name, introduce, profileImg } = this.props;
        return (
            <div className={s.wrap}>
                <span>{name}</span>
                <p>{introduce}</p>
                <img src={profileImg} alt={name} className={s.profileImg} />
                <p>요기는 서형이랑 슬비언니가 공유하는 Profile PC</p>
            </div>
        )
    }
}
