import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class UserCard extends Component {
    render() {
        const { avatar_url, login, name, url, repos_url, bio } = this.props.data
        return (
            <React.Fragment>
                <Card className={""}>
                    <CardActionArea>
                        <div style={{
                            backgroundImage: `url(${avatar_url})`,
                            width: '100%', height: '200px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            margin: 'auto'
                        }}>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name ? name : login}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {bio}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link color="primary" to={repos_url} target="_blank" rel="noreferrer" >
                            Ver repos
                        </Link>
                        <Link color="primary" to={url} target="_blank" rel="noreferrer" >
                            Ver en GitHub
                        </Link>
                    </CardActions>
                </Card>
            </React.Fragment>
        );
    }
}

export default UserCard;