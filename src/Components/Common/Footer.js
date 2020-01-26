import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <Typography variant="body2" color="primary" align="center">
                        Made with <FavoriteIcon color="secondary"/> by Alex!
                    {" " + new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;