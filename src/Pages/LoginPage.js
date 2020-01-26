import React, { Component } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import reposActions from '../ActionCreators/repos';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputText from "../Components/Common/InputText";
import Loader from '../Components/Common/Loader'
import GridRepos from "../Components/Common/GridRepos";

class LoginPage extends Component {
    render() {
        const { userName, error_userName, repos, setUserNameParam, searchUserRepos, loadingRepos} = this.props
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={""}>
                    <Typography component="h1" variant="h5">
                        Buscar repositorios   
                        <SearchIcon fontSize="large"/>
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
                    <Loader status={loadingRepos} />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={""}
                        onClick={searchUserRepos}
                        disabled={userName ? false : true}
                    >
                        Buscar
                    </Button>
                </div>
                <GridRepos data={repos}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.repos.userName,
    error_userName: state.repos.error_userName,
    repos: state.repos.repos,
    loadingRepos: state.repos.loadingRepos
});

const mapDispatchToProps = ({
    searchUserRepos: reposActions.searchUserRepos,
    setUserNameParam: reposActions.setUserNameParam
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));