import React, { Component } from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Card extends Component {
    render() {
        const { id, name, html_url } = this.props
        return (
            <React.Fragment>
                <CardContent>
                    <Typography color="primary">
                        {id}
                    </Typography>
                    <Typography color="primary">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a target="_blank" href={html_url} rel="noopener noreferrer">Learn More</a></Button>
                </CardActions>
            </React.Fragment>
        );
    }
}

export default Card;