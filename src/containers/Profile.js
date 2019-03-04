import React, { Component } from 'react'
import ProfileView from '../components/ProfileView';
import api from "../api";

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            introduce: "",
            profileImg: ""
        }
    }

    async componentDidMount() {
        const { userId } = this.props;

        if (userId) { //기본값 null이 들어올 때 요청 방지
            const { data: { name, introduce, profile_img } } = await api.get(`users/${userId}`);
            this.setState({
                name,
                introduce,
                profileImg: profile_img
            })
        }
    }
    render() {
        return (
            <ProfileView {...this.state} />
        )
    }
}
