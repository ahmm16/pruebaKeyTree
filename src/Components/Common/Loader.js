import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loader extends Component {
    render() {
        const { status } = this.props
        return (
            <React.Fragment>
                <CircularProgress style={{display: status ? 'block' : 'none', margin:'auto' }} />
            </React.Fragment>
        );
    }
}

export default Loader;