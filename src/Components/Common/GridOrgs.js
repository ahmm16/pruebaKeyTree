import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class GridOrgs extends Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>

                <GridList cellHeight={180}>
                    {
                        (data.length > 0 || !data) ? data.map((org) =>
                            <GridListTile key={org.id}>
                                <img src={org.avatar_url} alt={org.login} />
                            </GridListTile>
                        )
                            :
                            <Typography noWrap component="h2" color={"secondary"}>
                                No hay orgnanizaciones disponibles
                            </Typography>

                    }
                </GridList>
            </React.Fragment>
        );
    }
}

export default GridOrgs;