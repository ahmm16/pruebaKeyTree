import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';

class Repo extends Component {
    render() {
        const { id, name, html_url, forks_url, description, donwload_url } = this.props
        return (
            <React.Fragment>
                <Card className={""}>
                    <CardContent>
                        {name &&
                            <Typography noWrap variant="h5" component="h4" color={"primary"}>
                                {name}
                            </Typography>
                        }
                        {description &&
                            <Typography variant="subtitle2" gutterBottom>
                                {description}
                            </Typography>
                        }
                    </CardContent>
                    <CardActions>
                        {html_url &&
                            <Button
                                href={html_url} target="_blank" rel="noopener noreferrer"
                                variant="contained"
                                color="primary"
                                startIcon={<LinkIcon />}
                            >GitHub</Button>
                        }
                    </CardActions>
                </Card>
            </React.Fragment>
        );
    }
}

export default Repo;