import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer style={{
                    position: 'fixed', width: '100%', bottom: '2px', left: '50%',
                    margin: '0 auto', transform: 'translate(-50%, -50%)', backgroundColor: "secondary"
                }}>
                    <Typography variant="body2" color="primary" align="center">
                        Made with <FavoriteIcon color="secondary" /> by Alex!
                    {" " + new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;