import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Common/Card'

class GridRepos extends Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={4}>
                    {
                        data ? data.map((repo) =>
                            <Grid item xs key={repo.id}>
                                <Card
                                    id={repo.id}
                                    name={repo.name}
                                    html_url={repo.html_url}
                                >
                                </Card>
                            </Grid>
                        ) 
                        :
                        <h2 style={{color: 'red'}}>No hay repositorios disponibles</h2> 
                        
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default GridRepos;