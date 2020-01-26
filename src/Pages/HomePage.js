import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import reposActions from '../ActionCreators/repos';
import userActions from '../ActionCreators/user';
import Tabs from "../Components/Common/Tabs";

class HomePage extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userName !== '' && this.props.userName === '') {
            this.props.cleanParamsRepos()
            this.props.cleanUserParams()
        }
    }

    render() {
        const { repos, loadingRepos, userData,
            loadingUser, error_userData, orgs } = this.props
        return (
            <React.Fragment>
                <Tabs userData={userData} error_userData={error_userData} repos={repos} loadingRepos={loadingRepos} loadingUser={loadingUser} orgs={orgs} />
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
    orgs: state.user.orgs,
    error_userData: state.user.error_userData,
    loadingUser: state.user.loadingUser,

});

const mapDispatchToProps = ({
    //reposA
    cleanParamsRepos: reposActions.cleanParamsRepos,
    //userA
    cleanUserParams: userActions.cleanUserParams,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));