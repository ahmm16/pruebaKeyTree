import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Repo from '../Common/Repo'
import Typography from '@material-ui/core/Typography';

class GridRepos extends Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={4}>
                    {
                        (data.length > 0 || !data) ? data.map((repo) =>
                            <Grid item xs={4} key={repo.id}>
                                <Repo
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    donwload_url={`${repo.html_url}/archive/marter.zip`}
                                    forks_url={repo.forks_url}
                                >
                                </Repo>
                            </Grid>
                        )
                            :
                            <Typography noWrap component="h2" color={"secondary"}>No hay repositorios disponibles
                            </Typography>

                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default GridRepos;