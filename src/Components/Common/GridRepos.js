import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Repo from '../Common/Repo'

class GridRepos extends Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={4}>
                    {
                        data ? data.map((repo) =>
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
                            <h2 style={{ color: 'red' }}>No hay repositorios disponibles</h2>

                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default GridRepos;