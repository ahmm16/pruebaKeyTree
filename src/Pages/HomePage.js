import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import reposActions from '../ActionCreators/repos';
import userActions from '../ActionCreators/user';
import Tabs from "../Components/Common/Tabs";

class HomePage extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userName && prevProps.userName !== this.props.userName) {
           // this.props.cleanParamsRepos()
        }
    }

    render() {
        const { repos, loadingRepos, userData,
            loadingUser, error_userData } = this.props
        return (
            <React.Fragment>
                <Tabs userData={userData} error_userData={error_userData} repos={repos} loadingRepos={loadingRepos} loadingUser={loadingUser} />
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
    error_userData: state.user.error_userData,
    loadingUser: state.user.loadingUser,

});

const mapDispatchToProps = ({
    //reposA
    cleanParamsRepos: reposActions.cleanParamsRepos
    //userA
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));