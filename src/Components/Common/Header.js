import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

class Header extends Component {
    render() {
        // const {  } = this.props;
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <AppBar position="fixed" className={""} style={{ marginBottom: "50", zIndex: "1001" }}>
                        <Toolbar>
                            <img style={{ height: '50px', marginRight: '20px', float: 'right' }} alt="Keytree" src="https://www.keytree.com/wp-content/uploads/2017/07/logo-keytree-black.svg" />
                            <Typography variant="h6" noWrap>
                                Buscador de repositorios GitHub.
                             </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Header;