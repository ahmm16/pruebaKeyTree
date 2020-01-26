import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Avatar from '@material-ui/core/Avatar';
import reposActions from '../../ActionCreators/repos';
import userActions from '../../ActionCreators/user';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputText from "./InputText";
import Loader from './Loader'
import GridRepos from "./GridRepos";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import UserCard from "./UserCard";

class LoginPage extends Component {
    render() {
        const { userName, error_userName, repos, setUserNameParam, searchUserRepos, setUserData, loadingRepos, userData,
            loadingUser } = this.props
        return (
            <React.Fragment>
                <Grid item xs={3} style={{ marginTop: '50px' }}>
                    <CssBaseline />
                    <Typography component="h1" variant="h5">
                        Buscar repositorios
                    </Typography>
                    <Avatar>
                        <SearchIcon fontSize="large" />
                    </Avatar>
                    <InputText
                        type={"text"}
                        value={userName}
                        placeholder="Nombre de usuario"
                        label="usuario"
                        name="username"
                        error={""}
                        id="username"
                        onChange={setUserNameParam}
                        error={error_userName}
                    />
                    <Loader status={loadingUser} />
                    <Loader status={loadingRepos} color={"secondary"} />
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={""}
                                onClick={setUserData}
                                disabled={userName ? false : true}
                            >
                                Buscar info
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={""}
                                onClick={searchUserRepos}
                                disabled={userName ? false : true}
                            >
                                Buscar Repos
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Link href="https://github.com/" target="_blank" variant="body2">
                            {"Visita GitHub"}
                        </Link>
                    </Grid>
                </Grid>
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