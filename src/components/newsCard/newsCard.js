import React from "react";
import { Card, CardActions, CardActionArea, CardMedia, CardContent, Button, Typography } from '@material-ui/core'
import useStyles from './styles';
import classNames from 'classnames';

const NewsCard = ({ article, i, active }) => {

  const classes = useStyles();

  return (
    <div>
      <Card data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500" className={classNames(classes.Card, active === i ? classes.activeCard : null)}>
        <CardActionArea href={article.url} target="_blank">
          <div className={classes.details}>
            <Typography compnent="h2" variant="body2">{new Date(article.publishedAt).toDateString()}</Typography>
            <Typography compnent="h2" variant="body2">{article.source.name}</Typography>
          </div>
        <CardMedia className={classes.image} image={article.urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}></CardMedia>
        <CardContent>
          <Typography className={classes.title.split('-')[0]} variant="h6" component="h1">{article.title}</Typography>
            <Typography className={classes.desc} variant="body2" component="p" color="textSecondary">{article.description}</Typography>
          </CardContent>
          </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">Learn More</Button>
          <Typography variant="h6" component="h6" color="textSecondary">{i + 1}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
