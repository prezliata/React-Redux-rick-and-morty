import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';


const MediaCard = (props) => {
    const { classes, character, onCharacterInfoOpen} = props;

    return (
        <div className={classes.wrapper}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={character.image}
                        title="Contemplative Reptile"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {character.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => onCharacterInfoOpen(character.id)}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default compose(withStyles(styles))(MediaCard);