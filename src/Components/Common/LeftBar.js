import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Avatar from '@material-ui/core/Avatar';
import reposActions from '../../ActionCreators/repos';
import userActions from '../../ActionCreators/user';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import InputText from "./InputText";
import Loader from './Loader'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class LeftBar extends Component {
    render() {
        const { userName, error_userName, repos, setUserNameParam, searchUserRepos, setUserData, loadingRepos, userData,
            loadingUser, cleanUserParams, cleanParamsRepos } = this.props
        return (
            <React.Fragment>
                <Grid item xs={3} style={{ marginTop: '50px' }}>
                    <CssBaseline />
                    <Typography component="h1" variant="h5" color="primary">
                        Buscar 
                    </Typography>
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
                    <Loader status={loadingRepos}/>
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
                                Buscar datos
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
                        <Grid item xs={12}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={""}
                                onClick={cleanParamsRepos}
                            >
                                Limpiar
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify={"center"} style={{ marginTop: '10px' }}>
                        <Button href={"https://www.github.com/ahmm16"} target="_blank" rel="noopener noreferrer">
                            <Fab color="primary" aria-label="github">
                                <GitHubIcon />
                            </Fab>
                        </Button>
                        <Button href={"https://www.linkedin.com/in/alex-hernández-m"} target="_blank" rel="noopener noreferrer">
                            <Fab color="primary" aria-label="linkedin">
                                <LinkedInIcon />
                            </Fab>
                        </Button>
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
    cleanParamsRepos: reposActions.cleanParamsRepos,
    //userA
    setUserData: userActions.setUserData,
    cleanUserParams: userActions.cleanUserParams,

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftBar));