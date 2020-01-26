import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import reposActions from '../ActionCreators/repos';
import userActions from '../ActionCreators/user';
import Tabs from "../Components/Common/Tabs";

class LoginPage extends Component {
    render() {
        const { userName, error_userName, repos, setUserNameParam, searchUserRepos, setUserData, loadingRepos, userData,
            loadingUser } = this.props
        return (
            <React.Fragment>
                <Tabs userData={userData} repos={repos} loadingRepos={loadingRepos} loadingUser={loadingUser} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    //repos
    userName: state.repos.userName,
    repos: state.repos.repos,
    loadingRepos: state.repos.loadingRepos,
    //user
    userData: state.user.userData,
    loadingUser: state.user.loadingUser,

});

const mapDispatchToProps = ({
    //reposA
    searchUserRepos: reposActions.searchUserRepos,
    setUserNameParam: reposActions.setUserNameParam,
    //userA
    setUserData: userActions.setUserData,

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));