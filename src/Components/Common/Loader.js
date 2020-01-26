import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loader extends Component {
    render() {
        const { status, color } = this.props
        return (
            <React.Fragment>
                <CircularProgress color={color} style={{display: status ? 'block' : 'none', margin:'auto' }} />
            </React.Fragment>
        );
    }
}

export default Loader;